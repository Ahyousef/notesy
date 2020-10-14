'use strict'
require('@code-fellows/supergoose');

// const NotesCollection = require('../lib/model/notes-collection.js')

const Notes = require('../lib/notes.js');
jest.spyOn(global.console, 'log');

describe('notes Module', () => {
    it('does not log anything with invalid input', () => {
        const note = new Notes();
        note.execute();
        expect(console.log).not.toHaveBeenCalled();
    });
    it('console logs the message with valid input', () => {
        const note = new Notes();
        note.execute({ action: 'add', payload: 'valid input' })
        expect(console.log).toHaveBeenCalled();
    })
})

describe('notes Collection', () => {
    it('can create() a new note',async () => {
        const obj = {
            payload: 'Test',
            category: 'Category'
        }
        const note = new Notes()
        const test = await note.add(obj);
            Object.values(obj).forEach((val)=>{
                console.log(val);
                expect(test[val]).toEqual(obj[val])
            })
    })
    it('can get() an item',()=>{
        const obj={
            action: 'list',
            payload: 'life',
        }
        const note = new Notes()
        return note.list(obj).then((record) => {
            record != null
        })
    })
})