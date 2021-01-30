const { config } = require('../../../config');
const mapperPokemonResponse = (pokemons) => {
    const pokemonMapped = pokemons.map((pokemon,index) => {
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

module.exports = { mapperPokemonResponse };