"use strict";
const util = require("util");
const c = require("..");
console.log(c);

console.log();
console.log("nested colors");
console.log();
console.log(c.yellow(`foo ${c.red(c.bold("red"))} bar ${c.cyan("cyan")} baz`));
console.log(
  c.yellow("foo", c.red(c.bold("red")), "bar", c.cyan("cyan"), "baz")
);
console.log();
console.log();
console.log("printf-like formatting");
console.log();
console.log(c.bold(c.red(util.format("%s:%s", "foo", "bar", "baz"))));
console.log();
console.log();
console.log(
  c.bold(c.bold(util.format("%s:%s:%s", "foo", c.red("bar"), "baz")))
);
console.log();
console.log();
console.log("features");
console.log();
console.log(c.red("   This is a red string!"));
console.log(c.green("   This is a red string!"));
console.log(c.cyan("   This is a cyan string!"));
console.log(c.yellow("   This is a yellow string!"));
console.log();
console.log();
