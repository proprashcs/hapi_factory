'use strict';

const indexController = require('../controllers/indexController');

exports.registerRoutes = (server) => {

  server.route({
      method: 'GET',
      path: '/',
      handler: indexController.hello
  });

};

exports.registerRoutes.attributes = {
  name: 'routes-index'
};

