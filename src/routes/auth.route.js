const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User');


router = Router();

router.post('/register',
  [
    check('nickname', 'Минимальная длина имени - 5').isLength({ min: 5 }),
    check('password', 'Минимальная длина пароля - 5').isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Некорректные данные',
      });
    }

    try {
      const { nickname, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 12);

      const candidate = await User.findOne({ nickname });

      if (candidate) {
        return res.status(400).json({ message: 'Такой пользователь уже существует' });
      }

      const user = new User({ nickname, password: hashedPassword });
      await user.save();

      res.status(201).json({ message: 'Пользователь был создан' });

    } catch (e) {
      console.log(e.message)
      res.status(500).json({ message: 'Что-то пошло не так...' });
    }
});

router.post('/login',
  [
    check('nickname', 'Минимальная длина имени - 5').isLength({ min: 5 }),
    check('password', 'Минимальная длина пароля - 5').isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Некорректные данные',
      });
    }

    try {

      const { nickname, password } = req.body;
      const user = await User.findOne({ nickname });

      if (!user) return res.status(400).json(
        { message: 'Такого пользователя не существует' },
      );

      const isCorrectPassword = bcrypt.compare(password, user.password);

      if (!isCorrectPassword) return res.status(400).json(
        { message: 'Неверный пароль' },
      );

      const token = jwt.sign(
        { userId: user._id },
        config.get('jwtSecretKey'),
        { expiresIn: '1h' },
      );

      res.json({ token, userId: user._id, nickname, registrationDate: user.registrationDate });

    } catch (e) {
      console.log(e.message)
      res.status(500).json({ message: 'Что-то пошло не так...' });
    }

  },
);

module.exports = router;
