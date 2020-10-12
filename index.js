'use strict';

// This is the main entry point 
// Requires libraries from folder lib
// Make an instance of Input then sends it to Note

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const note = new Input();
new Notes(note);
