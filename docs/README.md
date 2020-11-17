# Sudoo-Generator

[![Build Status](https://travis-ci.com/SudoDotDog/Sudoo-Generator.svg?branch=master)](https://travis-ci.com/SudoDotDog/Sudoo-Generator)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-Generator/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-Generator)
[![npm version](https://badge.fury.io/js/%40sudoo%2Fgenerator.svg)](https://badge.fury.io/js/%40sudoo%2Fgenerator)
[![downloads](https://img.shields.io/npm/dm/@sudoo/generator.svg)](https://www.npmjs.com/package/@sudoo/generator)

:smirk_cat: Fake data generator

## Install

```sh
yarn add @sudoo/generator
yarn add @sudoo/pattern # Peer Dependencies
# Or
npm install @sudoo/generator --save
npm install @sudoo/pattern --save # Peer Dependencies
```

## Usage

```ts
import { Generator } from "@sudoo/generator";
import { createStringPattern } from "@sudoo/pattern";

const generator: Generator = Generator.create(createStringPattern());

const result: string = generator.generate(); // Random Generated String
```
