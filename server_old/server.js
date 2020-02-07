

// import * as express from 'express';
// import {Application} from "express";
// import {getAllCourses, getCourseById} from "./get-courses.route";
// import {searchLessons} from "./search-lessons.route";
// import {loginUser} from "./auth.route";
// import {saveCourse} from "./save-course.route";

const express = require('express');
const Application = require('express');
const {getAllCourses, getCourseById} = require('./get-courses.route');
const searchLessons = require('./search-lessons.route');
const loginUser = require('./auth.route');
const saveCourse = require('./save-course.route');


const bodyParser = require('body-parser');



const app = express();


app.use(bodyParser.json());


app.route('/api/login').post(loginUser);

app.route('/api/courses').get(getAllCourses);

app.route('/api/courses/:id').put(saveCourse);

app.route('/api/courses/:id').get(getCourseById);

app.route('/api/lessons').get(searchLessons);




const httpServer = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});




