const app = require("../app")
const { expect } = require('chai')
const request = require('supertest')
const { syncAndSeed } = require('../db')

describe('first', () => {
  it('it1', () => {

  })
})

// describe('second', () => {
//   it('shows Hello World', async () => {
//     const response = await app.get('/');
//     console.log(response)
//     expect (response.status).to.equal(200);
//     expect (response.text).to.equal('Hello World')
//   })
// })
syncAndSeed();
describe('second', () => {
   it('shows Hello World', async () => {
request(app)
  .get('/')
  .expect(200)
  .end((err,res) => {
    if (err) throw err;
  })
})
})