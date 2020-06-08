const jwt = require('jsonwebtoken');
const config = require('config');


module.exports = (req, res, next) => {
  if (req.method == 'OPTIONS') return next();

  try {
    const token = req.headers.authorisation.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Войдите или зарегистрируйтесь' });
    }

    const decoded = jwt.verify(token, config.jwtSecretKey);
    req.user = decoded;
    next();

  } catch (e) {
    console.log(e.message)
    res.status(401).json({ message: 'Войдите или зарегистрируйтесь' });
  }
};
