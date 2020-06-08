const { Router } = require('express');
// const { check, validationResult } = require('express-validator');
const Post = require('../models/Post');
const auth = require('../middlewares/auth.middleware');

const router = Router();

router.get(
  '/',
  (req, res) => {
    try {
      Post.find({}, (err, posts) => {
        res.json({ posts });
      })
    } catch (e) {
      console.log(e.message)
      res.status(500).json({ message: 'Что-то пошло не так...' });
    }
  },
);

router.post(
  '/create',
  auth,
  async (req, res) => {
    // const errors = validationResult(req);

    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ message: 'Некорректные данные!' });
    // }

    const { text, title } = req.body;
    console.log(text, title)
    const post = new Post({ text, title });
    await post.save();
    
    res.json({ message: 'Пост создан' });
  },
);

module.exports = router;
