const axios = require('axios').default;
const { setupCache } = require('axios-cache-adapter');
const { config } = require('../../config');

const cache = setupCache({
    maxAge: 15 * 60 * 1000
});

const pokemonInstance = axios.create({
    baseURL: config.POKEMON_BASE_API,
    adapter: cache.adapter
});

const getPokemons = async () => {
    const pokemons = await pokemonInstance.get('/pokemon', {
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

const getPokemonEvolution = async (id) => {
    const pokemonSpecies = await pokemonInstance.get(`/pokemon-species/${id}`);
    const pokemon = await axios.get(pokemonSpecies.data.evolution_chain.url);
    return pokemon.data.chain;
}

module.exports = {
    getPokemons,
    getPokemon,
    getPokemonEvolution
}