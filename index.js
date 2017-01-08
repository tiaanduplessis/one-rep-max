'use strict'

// https://en.wikipedia.org/wiki/One-repetition_maximum

// http://stackoverflow.com/questions/9716468/is-there-any-function-like-isnumeric-in-javascript-to-validate-numbers
function isNumber (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

function isValidArgs (weight, reps) {
  return isNumber(weight) && isNumber(reps) && weight > 0 && reps > 1
}

const methods = {
  epley: (weight, reps) => {
    return weight * (1 + (reps / 30))
  },
  brzycki: (weight, reps) => {
    return weight * (36 / (37 - reps))
  },
  mcGlothin: (weight, reps) => {
    return (100 * weight) / (101.3 - 2.67123 * reps)
  },
  lombardi: (weight, reps) => {
    return weight * Math.pow(reps, 0.10)
  },
  oConner: (weight, reps) => {
    return weight * (1 + (reps / 40))
  }
}

let validatedMethods = {}
Object.keys(methods).forEach((prop) => {
  validatedMethods[prop] = function (weight, reps) {
    if (isValidArgs(weight, reps)) {
      return methods[prop](weight, reps)
    } else {
      throw new Error(`Invalid arguments provided to ${prop} method.`)
    }
  }
})

module.exports = validatedMethods
