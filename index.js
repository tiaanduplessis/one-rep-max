'use strict'

// http://stackoverflow.com/questions/9716468/is-there-any-function-like-isnumeric-in-javascript-to-validate-numbers
function isNumber (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

function isValidArgs (weight, reps) {
  return isNumber(weight) && isNumber(reps) && weight > 0 && reps > 1
}

const methods = {
  epley: (args) => {
    return args.weight * (1 + (args.reps / 30))
  },
  brzycki: (args) => {
    return args.weight * (36 / (37 - args.reps))
  },
  mcGlothin: (args) => {
    return (100 * args.weight) / (101.3 - 2.67123 * args.reps)
  },
  lombardi: (args) => {
    return args.weight * Math.pow(args.reps, 0.10)
  },
  oConner: (args) => {
    return args.weight * (1 + (args.reps / 40))
  }
}

let validatedMethods = {}
Object.keys(methods).forEach((prop) => {
  validatedMethods[prop] = function (args) {
    if (isValidArgs(args.weight, args.reps)) {
      return methods[prop](args)
    } else {
      throw new Error(`Invalid arguments provided to ${prop} method.`)
    }
  }
})

module.exports = validatedMethods
