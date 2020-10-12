const Notes = require('../lib/notes.js');
jest.spyOn(global.console,'log');

describe('notes Module',()=>{
    it('does not log anything with invalid input',()=>{
        const note = new Notes();
        note.execute();
        expect(console.log).not.toHaveBeenCalled();
    });
    it('console logs the message with valid input',()=>{
        const note = new Notes();
        note.execute({action:'add',payload:'valid input'})
        expect(console.log).toHaveBeenCalled();
    })
})