'use strict';

const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: String,
    price: Number
});

module.exports = mongoose.model('Book', BookSchema);
