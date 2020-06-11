const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

const PORT = config.get('port') || 5000;
const mongoURI = config.get('mongoURI');

app.use(express.json({ extended: true }));
app.use('/auth',  require('./routes/auth.route'));
app.use('/posts', require('./routes/post.route'));
app.use('/user',  require('./routes/user.route'));

const start = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    app.listen(PORT, () => console.log(`Server has been started on post ${PORT}`));
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
};

start();
