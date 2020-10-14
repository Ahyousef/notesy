const minimist = require('minimist');
const Input = require('../lib/input.js');
jest.mock('minimist');
minimist.mockImplementation(() => {
    return {
        a: 'Test message'
    }
})

describe('Input',()=>{
    describe('validateCommand',()=>{
        it('Wrong method',()=>{
            const note = new Input();
            expect (note.validateCommand('ads')).toEqual(false);
        });
        it('Correct method and data associated',()=>{
            const note = new Input();
            // method one
            note.command = true;
            note.payload = true;
            expect (note.valid()).toEqual(true)
            // method two
            expect (note.validateCommand('add')).toEqual(true);
            expect (note.validatePayload('asd')).toEqual(true);
            // method three
            expect ((Object.keys(note)[0] == 'command') && (Object.keys(note)[1] == 'payload')).toEqual(true)
        })
    });
    describe('valid()',()=>{
        it('Either inputs is invalid',()=>{
            const note = new Input();
            note.command = false;
            expect (note.valid()).toEqual(false)
        })
    })
})

