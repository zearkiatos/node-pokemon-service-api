require('dotenv').config();

const DB_URL = process.env.NODE_ENV === 'develop' ? `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false`
: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?authSource=admin&replicaSet=atlas-ld92ni-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`

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
    CACHE: process.env.CACHE === 'true',
    POKEMON_BASE_API: process.env.POKEMON_BASE_API,
    POKEMON_API_LIMIT: process.env.POKEMON_API_LIMIT,
    POKEMON_ASSETS_BASE_URL: process.env.POKEMON_ASSETS_BASE_URL,
    DB_URL
};

module.exports = { config }