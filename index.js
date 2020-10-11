'use strict';

// This is the main entry point 
// Requires libraries from folder lib
// Make an instance of Input then sends it to Note

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

let instance = new Input();
// console.log(instance);
let notesInstance = new Notes(instance);