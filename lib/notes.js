'use strict'

// This is the notes module, it takes in input from the index(new instance of input).
// Validates if the command is add or a
// Based on command, executes a method


class Notes {
    constructor(objFromInput) {
        this.execute(objFromInput)
    }

    execute(objFromInput) {
        if (objFromInput !== undefined) {

            let method = objFromInput.action;
            if (method == 'add') {
                this.add(objFromInput)
            }

        }
    }

    add(objFromInput) {
        let note = {
            ID: 0,
            message: objFromInput.payload
        }
        console.log(`Adding Note: ${note.message}`);
    }
}

module.exports = Notes;

