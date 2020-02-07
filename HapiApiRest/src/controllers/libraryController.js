'use strict';

const library = require('../models/library');

exports.findAll = async (request, h) => {

    try {
        const Libraries = await library.find().exec();

        return h.response(Libraries);
    } catch (error) {
        return h.response(error).code(500);
    }

}

exports.findById = async (request, h) => {

    try {
        const library = await library.findById({_id:request.params.id}).exec();

        return h.response(library);
    } catch (error) {
        return h.response(error).code(500);
    }

}

exports.create = async (request, h) => {

  
    try {
        console.log(request.payload);
        const libraryCr = new library(request.payload);
        const result = await libraryCr.save();

        return h.response(result);
    } catch (error) {
        return h.response(error).code(500);
    }

}

exports.update = async (request, h) => {

    try {
        const libraryCr = await library.findById({ _id: request.params.id, body: request.params.body });
        book.title = request.payload.title;
        book.price = request.payload.price;

        const result = await libraryCr.save();

        return h.response(result);

    } catch (error) {
        return h.response(error).code(500);
    }

}

exports.delete = async (request, h) => {

    try {

        const result = await library.findByIdAndRemove({ _id: request.params.id, body: request.payload});

        return h.response(result);
    } catch (error) {
        return h.response(error).code(500);
    }

}


