'use strict'

const notesModel = require('./notes-schema.js');

class Collection {
    constructor() { }

    create(record) {
        const newRecord = new notesModel(record);
        return newRecord.save();
    }
    update(_id, record) {
        return notesModel.findByIdAndUpdate(_id, record, { new: true });
    }
    delete(_id) {
        return notesModel.findByIdAndDelete(_id)
    }
    get(categ) {
        if (categ) {
            return notesModel.findOne({ "category": categ })
        }
        else {
            return notesModel.find({})
        }
    }
}

module.exports = new Collection();