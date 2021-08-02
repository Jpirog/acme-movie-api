const app = require('supertest')(require('../app'));
const { expect } = require('chai')
const request = require('supertest')

describe('first', () => {
  it('it1', () => {
    // no test,just to show the test software is working
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
//syncAndSeed();
describe('second', () => {
   it('shows Hello World', async () => {
// request(app)
//   .get('/')
//   .expect(200)
//   .then((response) => {
//     console.log(response.body)
//     expect(response.body.text.toBe('Hello World'))
  // })
  // .end((err,res) => {
  //   if (err) throw err;
  // })
})
})