const sinon = require('sinon');
const { moviesMock, filteredMoviesMock } = require('./movies');

const getAllStub = sinon.stub();
const tagQuery = { tags: { $in: ['Drama'] } };
const createStub = sinon.stub().resolves(moviesMock[0].id);

getAllStub.withArgs('movies').resolves(moviesMock);
getAllStub.withArgs('movies', tagQuery).resolves(filteredMoviesMock('Drama'));

class MongoLibMock {
  getAll(collection, query) {
    return getAllStub(collection, query);
  }

  create(collection, data) {
    return createStub(collection, data);
  }
}

module.exports = {
  getAllStub,
  createStub,
  MongoLibMock
};
