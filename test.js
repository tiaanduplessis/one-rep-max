/* eslint-env mocha */
const assert = require('assert')
const oneRepMax = require('./index')

describe('One rep max formulas', () => {
  it('Epley formula should give correct results', () => {

    assert.equal(oneRepMax.epley(100, 9), 130)
    assert.equal(oneRepMax.epley(120, 2), 128)
  })
})
