<div align="center">
  <img src="media/banner.png" alt="one-rep-max">
</div>
<br>
<div align="center">
  <strong>Calculate the maximum amount of force that can be generated in one maximal contraction</strong>
</div>
<br>
<div align="center">
    <a href="https://github.com/feross/standard">
      <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard" />
    </a>
    <a href="https://travis-ci.org/tiaanduplessis/get-them-args">
      <img src="https://img.shields.io/travis/tiaanduplessis/one-rep-max/master.svg?style=flat-square" alt="Travis" />
    </a>
    <a href="https://github.com/RichardLitt/standard-readme)">
      <img src="https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square" alt="Standard Readme" />
    </a>
  </div>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="http://tiaanduplessis.co.za">Tiaan du Plessis</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#introduction">Introduction</a></li>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#cli">CLI</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## Introduction

[![Greenkeeper badge](https://badges.greenkeeper.io/tiaanduplessis/one-rep-max.svg)](https://greenkeeper.io/)

This module provides [various formulas](https://en.wikipedia.org/wiki/One-repetition_maximum#Calculating_1RM) for calculating one rep maximum based on a provided weight and number of repetitions.

## Install

**Install with npm**

```sh
$ npm install one-rep-max
```

**Install with yarn**

```sh
$ yarn add one-rep-max
```

## Usage

To use, choose which formula to apply and provide an object with a weight & repetitions properties.
You can read more about the available formulas [here](https://en.wikipedia.org/wiki/One-repetition_maximum#Calculating_1RM).

```js
const oneRepMax = require('one-rep-max')
const args = {
  weight: 100,
  reps: 10
}

console.log(oneRepMax.epley(args)) // 133.33333333333331
console.log(oneRepMax.brzycki(args)) // 133.33333333333331
console.log(oneRepMax.mcGlothin(args)) // 134.0703628078088
console.log(oneRepMax.lombardi(args)) // 125.89254117941672
console.log(oneRepMax.oConner(args)) // 125

```

## CLI

To use as a CLI tool, Install the module globally and run in the format:
```sh
$ 1rm --method={all|epley||brzycki|mcGlothin|lombardi|oConner} --weight={quite obvious} --reps={quite obvious}
```

For example:
```sh
$ 1rm --method=all --weight=100 --reps=10
# Outputs
# epley - 133.33333333333331
# brzycki - 133.33333333333331
# mcGlothin - 134.0703628078088
# lombardi - 125.89254117941672
# oConner - 125
```

## Contributing

All Contributions are welcome! Please open up an issue if you would like to help out. :smile:

## License

Licensed under the MIT License.

Icon made by <a href="http://www.flaticon.com/authors/darius-dan" title="Darius Dan">Darius Dan</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>