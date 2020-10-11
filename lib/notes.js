'use strict'

// This is the notes module, it takes in input from the index(new instance of input).
// Validates if the command is add or a
// Based on command, executes a method

const Notes = function (input) {
    this.execute(input);
}


Notes.prototype.execute = function (input) {
    if (input.action == "add") {
        this.add(input)
    }
    else {
        console.log('Other method')
    }
}

Notes.prototype.add = function (input) {
    let note = {
        ID: 0,
        noteText: input.payload
    }
    console.log(note.noteText)
}

module.exports = Notes;