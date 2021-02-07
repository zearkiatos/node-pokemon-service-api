const Model = require("../model");

async function addRating(rating) {
  const ratingModel = new Model(rating);
  await ratingModel.save();
}

async function getRatingByPokemon(pokemonId) {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (pokemonId !== null) {
      filter = { pokemonId };
    }
    Model.find(filter)
      .populate(pokemonId)
      .exec((error, populated) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populated);
      });
  });
}

async function getRatingTop(limit) {
  return new Promise((resolve, reject) => {
    Model.aggregate([
      {
        $group: {
          _id: "$pokemonId",
          rating: {$sum: "$rating"}
        }
      },
      {
        $sort: {
          rating: -1
        }
      },
      {
        $limit: limit
      }
    ]).exec((error, populated) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populated);
      });
  });
}

module.exports = {
  add: addRating,
  get: getRatingByPokemon,
  getTop: getRatingTop
};