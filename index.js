'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

let instance = new Input();
// console.log(instance);
let notesInstance = new Notes(instance);