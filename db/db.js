
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbBilawal:dbFMI@employeeclockclustor.txbf3.mongodb.net/employee-clock?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("employee-clock").collection("attendance");
  // perform actions on the collection object
  console.log('connect: ',collection)
  client.close();
});
