let config;

if (process.env.NODE_ENV === 'production') {
    config = require('./env/production').cfg;
} else {
    process.env.NODE_ENV = 'development';

    config = require('./env/development').cfg;
}
console.log('I am here show me the config, 1994');
console.log(config);

export { config };
