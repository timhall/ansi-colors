const colors = require("../");

console.log(colors.stripColor(colors.green("This should NOT be green!")));
console.log(colors.red(colors.green("This SHOULD be GREEN!")));
console.log(colors.red(colors.stripColor(colors.green("This SHOULD be RED!"))));
