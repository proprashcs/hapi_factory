'use strict';

const bookController = require('../controllers/bookController');
const Joi = require('@hapi/joi');

exports.registerRoutes = (server) => {

  server.route({
      method: 'GET',
      path: '/api/books',
      handler: bookController.booksFindAll
  });

  server.route({
      method: 'GET',
      path: '/api/books/{id}',
      handler: bookController.bookFindById
  });

  server.route({
      method: 'POST',
      path: '/api/books',
      
      config: {
        validate: {
          payload: Joi.object({
            title: Joi.string().min(3).max(20),
            price: Joi.number()
          })
        }
      },
      handler: bookController.createBook,
  });

  server.route({
      method: 'PUT',
      path: '/api/books/{id}',
      handler: bookController.updateBook,
      config: {
        validate: {
          payload: Joi.object({
            title: Joi.string().min(3).max(20),
            price: Joi.number()
          })
        }
      }
  });

  server.route({
      method: 'DELETE',
      path: '/api/books/{id}',
      handler: bookController.deleteBook
  });

};

exports.registerRoutes.attributes = {
  name: 'routes-books'
};

