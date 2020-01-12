# @timhall/ansi-colors

> Easily add ANSI colors to your text and symbols in the terminal. A faster drop-in replacement for chalk, kleur and turbocolor (without the dependencies and rendering bugs).

Please consider following this project's original author, [Brian Woodward](https://github.com/doowb), and consider starring the project to show your :heart: and support.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save ansi-colors
```

![image](https://user-images.githubusercontent.com/383994/39635445-8a98a3a6-4f8b-11e8-89c1-068c45d4fff8.png)

## Why use this?

@timhall/ansi-colors is _the smallest Node.js library for terminal styling_. A performant alternative to chalk, with no dependencies and designed to be tree-shakable.

- _Small and Tree-shakable_
- _Blazing fast_
- _No dependencies_
- _Safe_ - Does not modify the `String.prototype`.
- Supports [nested colors](#nested-colors).
- [Toggle color support](#toggle-color-support) on or off.

## Usage

```js
const c = require('ansi-colors');

console.log(c.red('This is a red string!'));
console.log(c.green('This is a red string!'));
console.log(c.cyan('This is a cyan string!'));
console.log(c.yellow('This is a yellow string!'));
```

![image](https://user-images.githubusercontent.com/383994/39653848-a38e67da-4fc0-11e8-89ae-98c65ebe9dcf.png)

## Nested colors

```js
console.log(c.yellow(`foo ${c.red(c.bold('red'))} bar ${c.cyan('cyan')} baz`));
```

![image](https://user-images.githubusercontent.com/383994/39635817-8ed93d44-4f8c-11e8-8afd-8c3ea35f5fbe.png)

## Toggle color support

Easily enable/disable colors.

```js
const c = require('ansi-colors');

// disable colors manually
c.enabled = false;

// or use a library to automatically detect support
c.enabled = require('color-support').hasBasic;

console.log(c.red('I will only be colored red if the terminal supports colors'));
```

## Strip ANSI codes

Use the `.stripColor` method to strip ANSI codes from a string.

```js
console.log(c.stripColor(c.blue(c.bold('foo bar baz'))));
//=> 'foo bar baz'
```

## Available styles

**Note** that bright and bright-background colors are not always supported.

| Colors  | Background Colors | Bright Colors | Bright Background Colors |
| ------- | ----------------- | ------------- | ------------------------ |
| black   | bgBlack           | blackBright   | bgBlackBright            |
| red     | bgRed             | redBright     | bgRedBright              |
| green   | bgGreen           | greenBright   | bgGreenBright            |
| yellow  | bgYellow          | yellowBright  | bgYellowBright           |
| blue    | bgBlue            | blueBright    | bgBlueBright             |
| magenta | bgMagenta         | magentaBright | bgMagentaBright          |
| cyan    | bgCyan            | cyanBright    | bgCyanBright             |
| white   | bgWhite           | whiteBright   | bgWhiteBright            |
| gray    |                   |               |                          |
| grey    |                   |               |                          |

_(`gray` is the U.S. spelling, `grey` is more commonly used in the Canada and U.K.)_

### Style modifiers

- dim
- **bold**

- hidden
- _italic_

- underline
- inverse
- ~~strikethrough~~

- reset

## Performance

**Libraries tested**

- @timhall/ansi-colors v5.0.0
- chalk v3.0.0

### Mac

> MacBook Pro, Intel Core i5, 1.4 GHz, 16 GB.

**Load time**

Time it takes to load the first time `require()` is called:

- ansi-colors - `0.965ms`
- chalk - `6.116ms`

**Benchmarks**

```
# All Colors
  ansi-colors x 529,231 ops/sec ±0.25% (92 runs sampled)
  chalk x 557,332 ops/sec ±0.17% (98 runs sampled)

# Nested colors
  ansi-colors x 102,504 ops/sec ±0.42% (90 runs sampled)
  chalk x 107,208 ops/sec ±0.23% (97 runs sampled)
```

## About

<details>
<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

</details>

<details>
<summary><strong>Running Tests</strong></summary>

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ yarn && yarn test
```

</details>

### Related projects

You might also be interested in these projects:

- [ansi-wrap](https://www.npmjs.com/package/ansi-wrap): Create ansi colors by passing the open and close codes. | [homepage](https://github.com/jonschlinkert/ansi-wrap 'Create ansi colors by passing the open and close codes.')
- [strip-color](https://www.npmjs.com/package/strip-color): Strip ANSI color codes from a string. No dependencies. | [homepage](https://github.com/jonschlinkert/strip-color 'Strip ANSI color codes from a string. No dependencies.')
