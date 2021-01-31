const pokemon = require('../pokemon/routes');
const comment = require('../comment/routes');
const routes = function (server) {
    server.use('/pokemon', pokemon);
    server.use('/comment',comment);
}

module.exports = routes;