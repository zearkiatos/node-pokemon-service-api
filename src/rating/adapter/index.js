const { config } = require('../../../config');

const mapperTopRatingResponse = (ratings) => {
    const pokemonMapped = ratings.map((rating) => {
        const number = ('000' + rating._id).slice(-3);

        return {
            pokemonId: rating._id,
            number,
            rating: rating.rating,
            image: config.POKEMON_ASSETS_BASE_URL + `${number}.png`,
        };
    });

    return pokemonMapped;
}

module.exports = { mapperTopRatingResponse };