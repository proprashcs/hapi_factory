

// import {Request, Response} from 'express';
// import {COURSES} from "./db-data";

const {Request, Response} = require('express');
const {COURSES} = require('./db-data');



module.exports.getAllCourses =  function getAllCourses(req, res) {

    console.log("Retrieving courses data ...");

    res.status(200).json({payload:Object.values(COURSES)});

};


module.exports.getCourseById =  function getCourseById(req, res) {

    const courseId = req.params["id"];

    const courses = Object.values(COURSES);

    const course = courses.find(course => course.id == courseId);

    res.status(200).json(course);
};