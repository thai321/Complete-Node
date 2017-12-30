const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  // db.collection('Todos').insertOne(
  //   {
  //     text: 'Something to do',
  //     completed: false
  //   },
  //   (err, result) => {
  //     if (err) {
  //       return console.log('Unable to insert todo');
  //     }
  //
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  //   }
  // );

  // Insert new doc into Users (name, age, location)
  // db.collection('Users').insertOne(
  //   {
  //     name: 'Thai',
  //     age: 26,
  //     location: 'Sunnyvale'
  //   },
  //   (err, result) => {
  //     if (err) {
  //       return console.log('Unable to insert user', err);
  //     }
  //
  //     console.log(result.ops);
  //   }
  // );

  console.log('Connected to MongoDB server');
  db.close();
});
