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
})

