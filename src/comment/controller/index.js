const repository = require('../repository');

function getComments(filter) {
    return new Promise((resolve, reject) => {
        try {
            const result = repository.get(filter);
            resolve(result);
        }
        catch (e) {
            reject(e.message);
        }
    });
}

function addComment(comment) {
    return new Promise((resolve, reject) => {
        try {
            const result = repository.add(comment);
            resolve(result);
        }
        catch (e) {
            reject(e.message);
        }

    });
}

module.exports = { getComments, addComment }