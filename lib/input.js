'use strict'

// This is the input module, it takes in input from the CLI.
// Validates if the command is add or a
// Returns an objects with two keys, action and payload.

const minimist = require('minimist')

class Input {

    constructor() {
        const arg = minimist(process.argv.slice(2))
        this.command = this.validateCommand(Object.keys(arg)[1]);
        this.payload = this.validatePayload(Object.values(arg)[1]);
        if (this.command == false)
        {console.log('Wrong command')}
        else if(this.payload == false){console.log('There is no text, please enter a message.');}
        else{
            return {
                action: 'add',
                payload: Object.values(arg)[1]
            }
        }
    }
    validateCommand(arg) {
        if ( arg === 'add' || arg === 'a'){
            return true
        }
        else{
            return false
        }
    }
    validatePayload(arg) {
        if (arg !== undefined && arg !== '')
           {
            return true
        }
        else{
            return false
        }
    }
    valid() {
        return this.command && this.payload;
      }
}


module.exports = Input;