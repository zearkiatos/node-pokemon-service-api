const express = require("express");
const boom = require('@hapi/boom');
const pokemonService = require('../../services/pokemon');
const adapter = require('../adapter');
const router = express.Router();

router.get('/', async function(request, response) {
  try {
    const pokemons = await pokemonService.getPokemons();
    const types = [];
    const pokemonMapped = adapter.mapperPokemonResponse(pokemons, types);
    response.send({
      statusCode: 200,
      data: pokemonMapped
    });
  }
  catch(e) {
    response.send({
      statusCode: boom.internal,
      message: e.message,
      stack: e.stack
    })
  }
});

module.exports = router;