const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then(result => {
//   console.log(result);
// });

// Todo.findOneAndRemove
Todo.findOneAndRemove({ _id: '5a47115304e5753836c948e2' }).then(todo => {
  console.log(todo);
});

// Todo.findByIdAndRemove
Todo.findByIdAndRemove('5a47115304e5753836c948e2').then(todo => {
  console.log(todo);
});
