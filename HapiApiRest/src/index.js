'use strict';

const Hapi = require('@hapi/hapi');
const mongoose = require('mongoose');
const config = require('./config/developement');
mongoose.Promise = require('bluebird');
// const plugins = require('./plugins/mongoose.plugin')


// Routes
const indexRoutes = require('./routes/index');
const booksRoutes = require('./routes/books');
const libraryRoutes = require('./routes/libraries');


//Set up default mongoose connection
// mongodb+srv://hapi:qwerty12345@cluster0-bakda.mongodb.net/hapi_live?retryWrites=true&w=majority
const promise = mongoose.connect('mongodb://127.0.0.1:27017/hapi_demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
promise.then(function(db) {
  console.log("Connected to database!!!");
}, function(err){
  console.log("Error in connecting database " + err);
});

// mongodb+srv://hapi:<password>@cluster0-bakda.mongodb.net/test?retryWrites=true&w=majority


//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const server = new Hapi.Server({
  host: config.host,
  port: config.port
});

// Register routes
const registerRoutes = () => {
  indexRoutes.registerRoutes(server),
  booksRoutes.registerRoutes(server),
  libraryRoutes.registerRoutes(server)
}

const serverStart = async () => {

  try {
    await server.start();
  } catch (err) {
    console.log(err)
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri)
}
serverStart()
registerRoutes()


