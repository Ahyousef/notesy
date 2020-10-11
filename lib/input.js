'use strict'

const minimist = require('minimist')

const Input = function () {
    const arg = minimist(process.argv.slice(2))
    this.method = this.validateCommand(arg.a, arg.add)
    this.payload = this.validatePayload(arg)
    if (this.method == false) {
        console.log('Invalid command.')
    }
    else if (this.payload == false) {
        console.log('No data associated with command.')
    }
    else {
        return(
            {
                action: this.method,
                payload: this.payload,
            }
        )
    }
}

Input.prototype.validateCommand = function (c, c2) {
    if (c == undefined && c2 == undefined) { return false }
    else { return 'add' }
}
Input.prototype.validatePayload = function (arg) {
    if ((arg.add !== '' && arg.add !== undefined) || (arg.a !== '' && arg.a !== undefined)) {
        return arg.add || arg.a
    }
    else {
        return false
    }
}
module.exports = Input;