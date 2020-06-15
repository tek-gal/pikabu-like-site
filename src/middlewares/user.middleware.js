const jwt = require('jsonwebtoken');
const config = require('config');


export default (req, res, next) => {
    try {
        if (req.method === 'OPTIONS') {
            return next();
        }
    
        if ('authentication' in req.headers) {
            const token = req.headers.authorisation.split(' ')[1];
            const decoded = jwt.verify(token, jwtSecretKey);
            req.user = decoded;
        }

        next();
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так..' });
    }
};