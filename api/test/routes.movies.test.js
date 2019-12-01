const assert = require('assert');
const proxyquire = require('proxyquire');
const { moviesMock, MoviesServiceMock } = require('../utils/mocks/movies');
const testServer = require('../utils/testServer');

describe('routes - movies', () => {
  const route = proxyquire('../routes/movies', {
    '../services/movies': MoviesServiceMock
  });
  const request = testServer(route);
  describe('GET /movies', () => {
    it('should respond with status 200', done => {
      request.get('/api/movies').expect(200, done);
    });
    it('should respond with the list of movies', done => {
      request.get('/api/movies').end((err, res) => {
        assert.deepEqual(res.body, {
          data: moviesMock,
          message: 'movies listed'
        });
        done();
      });
    });
  });

  describe('GET /movies/:movieId', () => {
    it('should respond with status 200', done => {
      request.get('/api/movies/5dde782d526d85205f3d100c').expect(200, done);
    });
    it('should respond with a movie', done => {
      request.get('/api/movies/5dde782d526d85205f3d100c').end((err, res) => {
        assert.deepEqual(res.body, {
          data: moviesMock[0],
          message: 'movie retrieved'
        });
        done();
      });
    });
  });

  describe('POST /movies', () => {
    it('should respond with status 201', done => {
      request.post('/api/movies').expect(201, done);
    });
    it('should respond with the created movie id', done => {
      request.post('/api/movies').end((err, res) => {
        assert.deepEqual(res.body, {
          data: moviesMock[0].id,
          message: 'movie created'
        });
        done();
      });
    });
  });

  describe('PUT /movies/:movieId', () => {
    it('should respond with status 200', done => {
      request.put('/api/movies/5dde782d526d85205f3d100c').expect(200, done);
    });
    it('should respond with the updated movie id', done => {
      request.put('/api/movies/5dde782d526d85205f3d100c').end((err, res) => {
        assert.deepEqual(res.body, {
          data: moviesMock[0].id,
          message: 'movie updated'
        });
        done();
      });
    });
  });

  describe('DELETE /movies/:movieId', () => {
    it('should respond with status 200', done => {
      request.delete('/api/movies/5dde782d526d85205f3d100c').expect(200, done);
    });
    it('should respond with the deleted movie id', done => {
      request.delete('/api/movies/5dde782d526d85205f3d100c').end((err, res) => {
        assert.deepEqual(res.body, {
          data: moviesMock[0].id,
          message: 'movie deleted'
        });
        done();
      });
    });
  });
});
