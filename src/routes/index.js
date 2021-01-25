const pokemon = require('../pokemon/routes');
const routes = function (server) {
    server.use('/pokemon', pokemon);
}

module.exports = routes;