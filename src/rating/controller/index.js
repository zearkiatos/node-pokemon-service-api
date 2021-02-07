const repository = require('../repository');

function getRatings(filter) {
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

function getTop(limit) {
    return new Promise((resolve, reject) => {
        try {
            const result = repository.getTop(limit);
            resolve(result);
        }
        catch (e) {
            reject(e.message);
        }
    });
}

function addRating(rating) {
    return new Promise((resolve, reject) => {
        try {
            const result = repository.add(rating);
            resolve(result);
        }
        catch (e) {
            reject(e.message);
        }

    });
}

module.exports = { getRatings, addRating, getTop }