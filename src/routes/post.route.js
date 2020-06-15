const { Router } = require('express');
// const { check, validationResult } = require('express-validator');
const Post = require('../models/Post');
const User = require('../models/User');
const auth = require('../middlewares/auth.middleware');

const router = Router();

router.get(
  '/',
  async (req, res) => {
    try {
      const posts = await Post
        .find({}, (err, posts) => posts)
        .populate({ path: 'owner', select: 'nickname' })
        .exec();
      
      const user = await User.findById

      res.json({ posts });
    } catch (e) {
      console.log(e.message)
      res.status(500).json({ message: 'Что-то пошло не так...' });
    }
  },
);

router.get(
  '/:id',
  async (req, res) => {
    try {
      const { id } = req.params;
      const post = await Post
        .findById(id)
        .populate({ path: 'owner', select: 'nickname' })
        .exec();
      res.json({ post });
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

    const { userId } = req.user;
    const { text, title } = req.body;
    const post = new Post({ text, title, owner: userId });
    await post.save();
    const user = await User.findById(userId);
    user.posts.push(post);
    await user.save();

    res.json({ message: 'Пост создан' });
  },
);

router.post(
  '/up/:id',
  auth,
  async (req, res) => {
    try {
      const { userId } = req.user;
      const { id } = req.params;

      const post = await Post.findById(id);
      post.rating += 1;
      await post.save();

      const user = await User.findById(userId);
      const { likedPosts, unlikedPosts } = user;
      
      // on plus
      if (unlikedPosts.includes(post._id)) {
        user.unlikedPosts = unlikedPosts.filter((p) => p._id.toString() !== post._id.toString());
      } else if (!(likedPosts.includes(post)) && !(unlikedPosts.includes(post))) {
        likedPosts.push(post);
      }
      
      await user.save();

      res.json({ message: 'Ваш голос учтен' });
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Что-то пошло нет так...' });
    }
  },
);

router.post(
  '/down/:id',
  auth,
  async (req, res) => {
    try {
      
      const { userId } = req.user;
      const { id } = req.params;
  
      const post = await Post.findById(id);
      post.rating -= 1;
      await post.save();

      const user = await User.findById(userId);
      const { likedPosts, unlikedPosts } = user;

      // on minus
      if (likedPosts.includes(post._id))  {
        user.likedPosts = likedPosts.filter((p) => p._id.toString() !== post._id.toString());
      } else if (!(likedPosts.includes(post)) && !(unlikedPosts.includes(post))) {
        unlikedPosts.push(post);
      }

      await user.save();

      res.json({ message: 'Ваш голос учтен' });
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Что-то пошло нет так...' });
    }
  },
);

module.exports = router;
