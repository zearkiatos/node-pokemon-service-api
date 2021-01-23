const boom = require('@hapi/boom');
const { config } = require('../../config');

const withErrorStack = (error, stack) => {
  if (config.DEV) {
    return { ...error, stack };
  }

  return error;
};

const logErrors = (error, request, response, next) => {
  // eslint-disable-next-line no-console
  console.log(error);
  next(error);
};

const wrapErrors = (error, require, response, next) => {

  if(!error.isBoom) {
    next(boom.badImplementation(error));
  }

  next(error);
}

// eslint-disable-next-line no-unused-vars
const errorHandler = (error, request, response, next) => {
  const { output: { statusCode, payload } } = error;
  response.status(statusCode);
  response.json(withErrorStack(payload, error.stack));
};


module.exports = {
    logErrors,
    errorHandler,
    wrapErrors
}