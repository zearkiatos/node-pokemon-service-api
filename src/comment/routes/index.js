const express = require("express");
const boom = require('@hapi/boom');
const commentController = require('../controller');
const router = express.Router();

router.get('/', async function(request, response) {
  const { pokemonId } = request.query;
  try {
    const comments = await commentController.getComments(pokemonId);
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

router.post('/', async function(request, response) {
    const { pokemonId, user, comment } = request.body;
    try {
      const commentObject = {
          pokemonId,
          user,
          date: Date.now(),
          comment
      }
      const comments = await commentController.addComment(commentObject);
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