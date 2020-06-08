const { Schema, model } = require('mongoose');

const Post = Schema({
  title:   { type: String, required: true },
  text:    { type: String, required: true },
  date:    { type: Date,   default: Date.now },
  ranking: { type: Number, default: 0 },
});

module.exports = model('Post', Post);
