'use strict'

const mongoose = require('mongoose');

const notesSchema = mongoose.Schema({
    text:{type:'string',required:true},
    category:{type:'string', required:true}
    
});

module.exports = mongoose.model('notesModel',notesSchema)