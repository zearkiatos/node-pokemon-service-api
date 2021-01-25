const axios = require('axios').default;
const { config } = require('../../config');

const pokemonInstance = axios.create({
    baseURL: config.POKEMON_BASE_API
  });

const getPokemons = async () => {
    const pokemons = await pokemonInstance.get('/pokemon',{
        params: {
            limit: config.POKEMON_API_LIMIT
        }
    });
    return pokemons.data.results;
}

const getPokemon = async (name) => {
    const pokemon = await pokemonInstance.get(`/pokemon/${name}`);
    return pokemon.data;
}

module.exports = {
    getPokemons,
    getPokemon
}