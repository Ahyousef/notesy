'use strict';

// This is the main entry point 
// Requires libraries from folder lib
// Make an instance of Input then sends it to Note

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');
const mongoose = require('mongoose');
const MONGODB_URI =
    process.env.MONGODB_URI || 'mongodb://localhost:27017/fetch';

mongoose
    .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology:true
    })
    .catch((err) => {
        console.log('Error happened', err.message);
    });
const note = new Input();
new Notes(note);

