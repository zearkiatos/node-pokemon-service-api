const Model = require("../model");

async function addComment(comment) {
  const commentModel = new Model(comment);
  await commentModel.save();
}

async function getCommentsByPokemon(pokemonId) {
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

module.exports = {
  add: addComment,
  get: getCommentsByPokemon,
};