const { Schema, model } = require('mongoose');

const schema = Schema({
  nickname: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  registrationDate: { type: Date, default: Date.now },
});

module.exports = model('User', schema);
