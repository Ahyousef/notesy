'use strict'
const mongoose = require('mongoose');
const NotesModel = require('./model/notes-schema.js')

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
            if (method == 'add' || method == 'a') {
                this.add(objFromInput)
            }
            else if (method == 'delete'){
                this.delete(objFromInput)
            }
            else if (method == 'list'){
                this.list(objFromInput)
            }

        }
    }

    async add(objFromInput) {
        const note = {
            text: objFromInput.payload,
            category: objFromInput.category
        }
        // console.log(note);
        if (note.category){
            const record = new NotesModel(note)
            // console.log(record);
            const saved = await record.save();
            console.log(`Note Saved: ${note.text}`);
            mongoose.disconnect();
            return saved;
        }
        else{
            console.log('Please enter category for note using --category');
            mongoose.disconnect();
        }

    }
    async delete(objFromInput){
        let id = objFromInput.payload;
        const deleteNote = await NotesModel.findByIdAndDelete({"_id": id}).catch(err=>{console.error(err);})
        console.log(`Deleted ${deleteNote}`)
        mongoose.disconnect();

    }
    async list(objFromInput){
        if(objFromInput.payload == '' || objFromInput.payload == true){
           const allNotes = await NotesModel.find({});
           console.log('All Notes', allNotes);
        }
        else{
        const categorizedNotes = await NotesModel.find({"category": objFromInput.payload});
        console.log('Categorized Notes: ', categorizedNotes);
        }
        mongoose.disconnect();

    }
}

module.exports = Notes;

