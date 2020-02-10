'use strict';

const library = require('../models/library');
const service = require('../services/queries');


exports.findAll = async (request, h) => {

    try {
        // const Libraries = await library.find().exec();
        const res = await service.getData(library, request.payload, {}, {}, (err, result) => {
            if (err){
                reject(err);
            } 
            else {
                 resolve(result);
            }
        });

        return h.response(res);
    } catch (error) {
        return h.response(error).code(500);
    }

}

exports.findById = async (request, h) => {

    try {
        // const library = await library.findById({_id:request.params.id}).exec();
        const res = await service.findOne(library, {_id:request.params.id}, {}, {}, (err, result) => {
            if (err){
                reject(err);
            } 
            else {
                 resolve(result);
            }
        });

        return h.response(res);
        // return h.response(library);
    } catch (error) {
        return h.response(error).code(500);
    }

}

exports.create = async (request, h) => {

  
    try {
        console.log(request.payload);
       const result = await service.saveData(library, request.payload, (err, result) => {
            if (err){
                reject(err);
            } 
            else {
                 resolve(result);
            }
        });
        // const libraryCr = new library(request.payload);
        // const result = await libraryCr.save();

        return h.response(result);
    } catch (error) {
        return h.response(error).code(500);
    }

}

exports.update = async (request, h) => {
    console.log('I am a regular console log.');
    try {
        // const libraryCr = await library.findById({ _id: request.params.id, body: request.params.body });
        // book.title = request.payload.title;
        // book.price = request.payload.price;

        // const result = await libraryCr.save();

        // return h.response(result);
        const result = await service.findAndUpdate(library, {_id : request.params.id},  request.payload, {}, (err, result) => {
            if (err){
                reject(err);
            } 
            else {
                 resolve(result);
            }
        });

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


