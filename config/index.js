require('dotenv').config();

const config = {
    DEV: process.env.NODE_ENV !== 'production',
    ENVIRONMENT: process.env.NODE_ENV,
    PORT: process.env.PORT || 3000,
    CORS: process.env.CORS,
    DB_USER: process.env.DB_USER,
    DB_PORT: process.env.DB_PORT,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DEBUG: process.env.DEBUG_EXPRESS,
    CACHE: process.env.CACHE === 'true'
};

module.exports = { config }