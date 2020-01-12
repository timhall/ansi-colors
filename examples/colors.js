const colors = require("..");
console.log(colors.stripColor(colors.green("this is not green!")));

const cyan = colors.cyan;
console.log(cyan("foo"));
