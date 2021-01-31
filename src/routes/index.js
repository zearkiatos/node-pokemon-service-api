const pokemon = require('../pokemon/routes');
const comment = require('../comment/routes');
const rating = require('../rating/router');
const routes = function (server) {
    server.use('/pokemon', pokemon);
    server.use('/comment', comment);
    server.use('/rating', rating);
}

module.exports = routes;