'use strict'

// This is the input module, it takes in input from the CLI.
// Validates if the command is add or a
// Returns an objects with two keys, action and payload.


const mongoose = require('mongoose');


const minimist = require('minimist')

class Input {

    constructor() {
        const arg = minimist(process.argv.slice(2))
        let command = Object.keys(arg)[1];
        let payload = Object.values(arg)[1];
        let category = Object.keys(arg)[2];
        this.command = this.validateCommand(command);
        this.payload = this.validatePayload(payload);
        this.category = this.validateCategory(category);
        if (this.command == false) {
            console.log('Wrong command')
            mongoose.disconnect();
        }
        else if (command != 'list' && this.payload == false) {
            console.log('There is no text, please enter a message.');
            mongoose.disconnect();
        }
        else if ((command == 'add' || command == 'a') && category != 'category'){
            console.log('For category use --category');
            mongoose.disconnect();
        }
        else { 
            return {
                action: command,
                payload: payload,
                category: Object.values(arg)[2]
            }
        }
    }
    validateCommand(arg) {
        if (arg === 'add' || arg === 'a' || arg === 'delete' || arg === 'list') {
            return true
        }
        else {
            return false
        }
    }
    validatePayload(arg) {
        if (arg !== undefined && arg !== '' && arg.length > 0) {
            return true
        }
        else {
            return false
        }
    }
    validateCategory(arg) {
        if (arg == "category") {
            return true
        }
        else { return false }
    }
    valid() {
        return this.command && this.payload;
    }
}


module.exports = Input;