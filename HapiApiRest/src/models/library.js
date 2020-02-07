'use strict';

const mongoose = require('mongoose');

const LibrarySchema = new mongoose.Schema({
    name: String,
    place: String,
    library_code: Number,
    last_update:Date
});

module.exports = mongoose.model('Library', LibrarySchema);
