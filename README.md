# Gender-options

A lightweight package to provide easy lists of gender options for use in web forms.

[![NPM Version](https://img.shields.io/npm/v/gender-options.svg)](https://www.npmjs.com/package/gender-options)
[![Build Status](https://travis-ci.org/aimee-gm/gender-options.svg?branch=master)](https://travis-ci.org/aimee-gm/gender-options)
![MIT License](https://img.shields.io/github/license/aimee-gm/gender-options.svg)

## Installation

To install via `npm`:

```shell
npm install --save gender-options
```

## Usage

```javascript
const { genderOptions } = require('gender-options');
```

or

```javascript
import { genderOptions } from 'gender-options';
```

## Data structure

`genderOptions` is an object with three properties:

- `genderOptions.basic` - a minimal list of gender identities for the most basic of forms (e.g. radio buttons)
- `genderOptions.standard` - a wide list of gender identities to allow for an (almost) fully-inclusive form without all possible options (e.g. select box)
- `genderOptions.extended` - complete list of gender identities where length is no issue (e.g. typeahead)

The three lists are arrays of objects with `label` and `value` properties sorted alphabetically:

```javascript
// EXAMPLE LIST
[
	{
		label: 'Female',
		value: 'male',
	},
	{
		label: 'Non-binary',
		value: 'nonbinary'
	},
	...
]
```

## Contributing and completeness

This project is currently incomplete, so please [suggest new gender identities](./CONTRIBUTING.md) to add to the lists.
