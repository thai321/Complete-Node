console.log('Starting app.');

const fs = require('fs');
// const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

// console.log(process.argv);
const argv = yargs.argv;
var command = process.argv[2];
console.log('Command: ', command);
console.log('Process: ', process);
console.log('Yargs: ', argv);

// debugger;

if (command === 'add') {
  console.log('Adding new note');
} else if (command === 'list') {
  console.log('Listing all notes');
} else if (command === 'read') {
  console.log('Reading note');
} else if (command === 'remove') {
  console.log('Removing note');
} else {
  console.log('Command not recognized');
}
