const repository = require('../repository');

function getComments(filter) {
    return new Promise((resolve, reject) => {
        resolve(repository.get(filter));
    });
}

function addComment(comment) {
    return new Promise((resolve, reject) => {
        resolve(repository.add(comment));
    });
}

module.exports = { getComments, addComment }