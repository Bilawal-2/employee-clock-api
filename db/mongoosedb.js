const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dbBilawal:dbFMI@employeeclockclustor.txbf3.mongodb.net/employee-clock', 
{useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("we re connected")
});