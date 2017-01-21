'use strict'

const oneRepMax = require('./index')
const args = {
  weight: 100,
  reps: 10
}

console.log(oneRepMax.epley(args))
console.log(oneRepMax.brzycki(args))
console.log(oneRepMax.mcGlothin(args))
console.log(oneRepMax.lombardi(args))
console.log(oneRepMax.oConner(args))
