const log = require("..");
log.ok = msg => `${log.green(log.check)} ${log.bold(msg)}`;
console.log(log.ok("done!"));
