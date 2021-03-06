const app = require('supertest')(require('../app'));
const { expect } = require('chai');
//const request = require('supertest');
const { syncAndSeed } = require('../db');

describe('Basic tests', () => {
  beforeEach(()=> syncAndSeed());
  describe('ping test', () => {
    it('it1', () => {
      // no test,just to show the test software is working
    })
  })
  describe('test for hello world', () => {
    it('shows Hello World', async () => {
      const response = await app.get('/');
      expect (response.status).to.equal(200);
      expect (response.text).to.equal('Hello World')
    })
  })
  it('allows cors requests', async()=> {
    const response = await app.get('/');
    expect(response.headers['access-control-allow-origin']).to.equal('*');
  });
})

describe('Movie tests', () => {
  beforeEach(()=> syncAndSeed());
  describe('test for movies', () => {
    it('returns movies', async () => {
      const response = await app.get('/api/movies');
      expect(response.status).to.equal(200);
      expect(response.body.length).to.equal(4);
    })
  })
})

describe('Actor tests', () => {
  beforeEach(()=> syncAndSeed());
  describe('test for actors', () => {
    it('returns actors', async () => {
      const response = await app.get('/api/actors');
      expect(response.status).to.equal(200);
      expect(response.body.length).to.equal(5);
    })
  })
})
