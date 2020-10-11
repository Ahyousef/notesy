'use strict'

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