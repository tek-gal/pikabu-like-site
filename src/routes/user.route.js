const { Router } = require('express');
const User = require('../models/User');

const router = Router();

router.get(
    '/:id',
    async (req, res) => {
        try {
            // const { currentUser } = req.body;
            const { id } = req.params;
            const user = await User.findById(id)
                .populate('posts')
                .exec();
            delete user.password;
            user.pluses = user.likedPosts.length;
            user.minuses = user.unlikedPosts.length;
            res.json({ user });
        } catch (e) {
            console.log(e.message);
            res.status(500).json({ message: 'Что-то пошло не так...' });
        }
    },
);

module.exports = router;