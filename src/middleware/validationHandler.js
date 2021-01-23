const boom = require('@hapi/boom');

const validate = (data, schema) => {
    try {
        const { error } = schema.validate(data);
        return error;
    }
    catch (e) {
        throw new Error(e)
    }
}

const validationHandler = (schema, check = 'body') => {
    return (request, response, next) => {
        const error = validate(request[check], schema);
        error ? next(boom.badRequest(error)) : next();
    };
}

module.exports = validationHandler;