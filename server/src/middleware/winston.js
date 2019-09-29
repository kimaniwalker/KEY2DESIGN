
const winston = require('winston');
const appRoot = require('app-root-path');
import { config } from '../config';
import { Timber } from "@timberio/node";
import { TimberTransport } from "@timberio/winston";


const timber = new Timber(config.TIMBER, config.TIMBER_SOURCEID);
const tsFormat = () => (new Date()).toLocaleTimeString();

const options =  {
    info: {
        level: 'info',
        timestamp: tsFormat,
        filename: `${appRoot}/logs/app.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: true,
    },
    debug: {
        level: 'debug',
        timestamp: tsFormat,
        filename: `${appRoot}/logs/debug.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: true,
    },

    server: {
        level: 'warn',
        timestamp: tsFormat,
        filename: `${appRoot}/logs/server.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: true,
    },

    error: {
        level: 'error',
        timestamp: tsFormat,
        filename: `${appRoot}/logs/error.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: true,
    },

    console: {
        level: 'debug',
        handleExceptions: true,
        json: true,
        colorize: true,
    }

};

const logger = winston.createLogger({
   
    transports: [
        new TimberTransport(timber),
        new winston.transports.File(options.info),
        new winston.transports.File(options.server),
        new winston.transports.File(options.debug),
        new winston.transports.File(options.error),
        
        new winston.transports.Console(options.console)
    ],
    exitOnError: false, // do not exit on handled exceptions
});



logger.stream = {
    write: function (message, encoding) {

        /* logger.info('Logging Info' + message + encoding);
        logger.debug('Debugging' + message + encoding);
        logger.error('Logging Errors' + message + encoding);
        logger.warn('Logging HTTP Request' + message + encoding); */
        

        
    },
};




module.exports = logger;