const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

var id = '5a47115304e5753836c948e2';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

Todo.find({
  _id: id
}).then(todos => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then(todo => {
  console.log('Todo', todo);
});

Todo.findById(id)
  .then(todo => {
    if (!todo) {
      return console.log('Id not found');
    }
    console.log('Todo By Id', todo);
  })
  .catch(e => console.log(e));

Todo.findById('5a47115304e5753836c948e2').then(
  user => {
    if (!user) {
      return console.log('Unable to find user');
    }

    console.log(JSON.stringify(user, undefined, 2));
  },
  e => {
    console.log(e);
  }
);
