const { Schema, model, Types } = require('mongoose');

const Post = Schema({
  title:  { type: String, required: true },
  text:   { type: String, required: true },
  date:   { type: Date,   default: Date.now },
  rating: { type: Number, default: 0 },
  owner:  { type: Types.ObjectId, ref: 'User' },
});

module.exports = model('Post', Post);
