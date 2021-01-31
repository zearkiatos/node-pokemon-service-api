const express = require("express");
const boom = require('@hapi/boom');
const ratingController = require('../controller');
const router = express.Router();

router.get('/', async function(request, response) {
  const { pokemonId } = request.query;
  try {
    const ratings = await ratingController.getRatings(pokemonId);
    response.send({
      statusCode: 200,
      data: ratings
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

router.post('/', async function(request, response) {
    const { pokemonId, rating } = request.body;
    try {
      const ratingObject = {
          pokemonId,
          rating
      }
      const comments = await ratingController.addRating(ratingObject);
      response.send({
        statusCode: 200,
        data: comments
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