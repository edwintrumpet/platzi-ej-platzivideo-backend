const assert = require('assert');
const proxyquire = require('proxyquire');
const {
  MongoLibMock,
  getAllStub,
  getOneStub,
  createStub
} = require('../utils/mocks/mongoLib');
const { moviesMock } = require('../utils/mocks/movies');

describe('services - movies', () => {
  const MoviesService = proxyquire('../services/movies', {
    '../lib/mongo': MongoLibMock
  });
  const moviesService = new MoviesService();
  describe('when getMovies method is called', async () => {
    it('should call the getAll MongoLib method', async () => {
      await moviesService.getMovies({});
      assert.strictEqual(getAllStub.called, true);
    });

    it('should return an array of movies', async () => {
      const result = await moviesService.getMovies({});
      const expected = moviesMock;
      assert.deepEqual(result, expected);
    });
  });

  describe('when getMovie method is called', async () => {
    it('should call the get MongoLib method', async () => {
      await moviesService.getMovie({});
      assert.strictEqual(getOneStub.called, true);
    });

    it('should return a movie', async () => {
      const result = await moviesService.getMovie({});
      const expected = moviesMock[0];
      assert.deepEqual(result, expected);
    });
  });

  describe('when createMovie method is called', async () => {
    it('should call the create MongoLib method', async () => {
      await moviesService.createMovie({});
      assert.strictEqual(createStub.called, true);
    });

    it('should return a movie id', async () => {
      const result = await moviesService.createMovie({});
      const expected = moviesMock[0].id;
      assert.deepEqual(result, expected);
    });
  });
});
