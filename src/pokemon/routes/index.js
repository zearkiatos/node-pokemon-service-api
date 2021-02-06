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

router.get('/:name', async function(request, response) {
  try {
    const { name } = request.params;
    const pokemon = await pokemonService.getPokemon(name);
    const pokemonMapped = adapter.mapperPokemonDetailResponse(pokemon);
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

router.get('/:id/evolution', async function(request, response) {
  try {
    const { id } = request.params;
    const pokemon = await pokemonService.getPokemonEvolution(id);
    const pokemonMapped = await adapter.mapperPokemonEvolutionResponse(pokemon);
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