let config;

if (process.env.NODE_ENV === 'production') {
    config = require('./env/production').cfg;
} else {
    process.env.NODE_ENV = 'development';

    config = require('./env/development').cfg;
}

export { config };
