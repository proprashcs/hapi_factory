'use strict';

const Book = require('../models/book');

exports.booksFindAll = async (request, h) => {

    try {
        const books = await Book.find().exec();

        return h.response(books);
    } catch (error) {
        return h.response(error).code(500);
    }

}

exports.bookFindById = async (request, h) => {

    try {
        const book = await Book.findById({_id:request.params.id}).exec();

        return h.response(book);
    } catch (error) {
        return h.response(error).code(500);
    }

}

exports.createBook = async (request, h) => {
console.log(request);
    try {

        const book = new Book(request.payload);
        const result = await book.save();

        return h.response(result);
    } catch (error) {
        return h.response(error).code(500);
    }

}

exports.updateBook = async (request, h) => {

    try {
        const book = await Book.findById({ _id: request.params.id, body: request.params.body });
        book.title = request.payload.title;
        book.price = request.payload.price;

        const result = await book.save();

        return h.response(result);

    } catch (error) {
        return h.response(error).code(500);
    }

}

exports.deleteBook = async (request, h) => {

    try {

        const result = await Book.findByIdAndRemove({ _id: request.params.id, body: request.payload});

        return h.response(result);
    } catch (error) {
        return h.response(error).code(500);
    }

}


