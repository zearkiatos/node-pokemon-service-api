const { config } = require('../../../config');
const pokemonService = require('../../services/pokemon');
const mapperPokemonResponse = (pokemons) => {
    const pokemonMapped = pokemons.map((pokemon, index) => {
        const id = index + 1;
        const number = ('000' + id).slice(-3);

        return {
            name: pokemon.name,
            id,
            number,
            image: config.POKEMON_ASSETS_BASE_URL + `${number}.png`,
        };
    });

    return pokemonMapped;
}

const mapperPokemonDetailResponse = (pokemon) => {
    const number = ('000' + pokemon.id).slice(-3);

    return {
        ...pokemon,
        number,
        image: config.POKEMON_ASSETS_BASE_URL + `${number}.png`,
    };
}

const mapperPokemonEvolutionResponse = async (chain) => {
    let evoChain = [];
    let evoData = chain;

    do {
        const name = evoData.species.name;
        const pokemonDetail = await pokemonService.getPokemon(name);
        const number = ('000' + pokemonDetail.id).slice(-3);
        const types = pokemonDetail.types.map(type => type.type.name);
        evoChain.push({
            "name": evoData.species.name,
            "id": pokemonDetail.id,
            number,
            types,
            image: config.POKEMON_ASSETS_BASE_URL + `${number}.png`
        });

        evoData = evoData['evolves_to'][0];
    } while (!!evoData && evoData.hasOwnProperty('evolves_to'));

    return evoChain;
}

module.exports = { mapperPokemonResponse, mapperPokemonDetailResponse, mapperPokemonEvolutionResponse };