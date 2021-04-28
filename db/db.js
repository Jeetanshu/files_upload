const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:Password@123456@cluster0.h2qkg.mongodb.net/memories?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});