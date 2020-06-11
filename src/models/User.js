const { Schema, model, Types } = require('mongoose');

const schema = Schema({
  nickname: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rating:   { type: Number, default: 0 },
  minuses:  { type: Number, default: 0 }, // ?
  pluses:   { type: Number, default: 0 }, // ?
  commens:  { type: Number, default: 0 }, // ?
  registrationDate: { type: Date, default: Date.now },
  posts:         [{ type: Types.ObjectId, ref: 'Post' }],
  likedPosts:    [{ type: Types.ObjectId, ref: 'Post' }],
  unlikedPosts: [{ type: Types.ObjectId, ref: 'Post' }],
});

module.exports = model('User', schema);
