const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  //deteleMany
  // db
  //   .collection('Todos')
  //   .deteleMany({ text: 'Eat lunch' })
  //   .then(result => {
  //     console.log(result);
  //   });

  //deteleOne
  // db
  //   .collection('Todos')
  //   .deleteOne({ text: 'Eat lunch' })
  //   .then(result => {
  //     console.log(result);
  //   });

  //findOneAndDelete
  // db
  //   .collection('Todos')
  //   .findOneAndDelete({ completed: false })
  //   .then(result => {
  //     console.log(result);
  //   });

  // db.collection('Users').deteleMany({ name: 'Thai' });

  // db
  //   .collection('Users')
  //   .findOneAndDelete({
  //     _id: new ObjectID('....')
  //   })
  //   .then(result => {
  //     console.log(JSON.stringify(result, undefined, 2));
  //   });

  db.close();
});
