#! /usr/bin/env node
'use strict'

const camelCase = require('camelcase')
const oneRepMax = require('./index')
const args = require('get-them-args')(process.argv.slice(2))

const method = camelCase(args.method)
const weight = new Number(args.weight)
const reps = new Number(args.reps)

if (method === 'all') {
  Object.keys(oneRepMax).forEach((prop) => {
    console.log(`${prop} - ${oneRepMax[prop](weight, reps)}`)
  })
} else {
  console.log(`${method} - ${oneRepMax[method](weight, reps)}`)
}
