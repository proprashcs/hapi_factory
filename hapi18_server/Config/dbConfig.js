
'use strict';

switch (process.env.NODE_ENV) {

    case 'dev':{
        exports.config = {
            PORT : 8000,
            dbURI : 'mongodb://127.0.0.1:27017/hapi_demo',
            swaggerName : 'Dev APIs',
        };
        break;
    }
    case 'live':{
        exports.config = {
            PORT : 8001,
            dbURI : 'mongodb://username:pass@host/dbname',
            swaggerName : 'Live APIs',
        };
        break;
    }
}
