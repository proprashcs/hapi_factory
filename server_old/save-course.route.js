// import {Request, Response} from 'express';
// import {COURSES} from "./db-data";

const {Request, Response} = require('express');
const {COURSES} = require('./db-data');

exports.saveCourse = function saveCourse(req, res) {

    console.log("Saving course ...");

    const id = req.params["id"],
        changes = req.body;

    COURSES[id] = {
        ...COURSES[id],
        ...changes
    };

    res.status(200).json(COURSES[id]);

}

