'use strict';

const libraryController = require('../controllers/libraryController');
const Joi = require('@hapi/joi');

exports.registerRoutes = (server) => {

  server.route({
      method: 'GET',
      path: '/api/libs',
      handler: libraryController.findAll
  });

  server.route({
      method: 'GET',
      path: '/api/libs/{id}',
      handler: libraryController.findById
  });

  server.route({
      method: 'POST',
      path: '/api/libs',
      
      config: {
        validate: {
          payload: Joi.object({
            name: Joi.string().min(3).max(20),
            place: Joi.string().min(3).max(200),
            library_code: Joi.number()
          })
        },
        handler: libraryController.create,
      }
  });

  server.route({
      method: 'PUT',
      path: '/api/libs/{id}',
      handler: libraryController.update,
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
      path: '/api/libs/{id}',
      handler: libraryController.delete
  });

};

exports.registerRoutes.attributes = {
  name: 'routes-libraries'
};

