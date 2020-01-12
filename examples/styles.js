const util = require('util');
const c = require('..');
c.info = (...args) => {
  return c.bold(c.cyan('[info] ')) + c.cyan(...args);
};

console.log(c.info('This is some information'));
console.log(c.bold(c.yellow('[warning]')), c.yellow('This is a warning'));
console.error(c.bold(c.red('[ERROR]')), c.red('Danger! There was an error!'));

console.log(c.yellow(c.bold(c.underline(c.italic('foo')))));
console.log(c.white('foo'));
console.log(c.red(`a red ${c.bold(c.yellow('and bold yellow'))} message`));
console.log(c.bold(c.green(`a bold green ${c.bold(c.yellow('and bold yellow'))} message`)));
console.log(c.yellow(`foo ${c.red(c.bold('red'))} bar ${c.cyan('cyan')} baz`));
console.log(c.yellow('foo', c.red(c.bold('red')), 'bar', c.cyan('cyan'), 'baz'));
console.log(c.bold(c.red('this is a bold red message')));
console.log(c.bold(c.italic('this is a bold italicized message')));
console.log(c.bold(c.yellow(c.italic('this is a bold yellow italicized message'))));
console.log(c.green(c.bold(c.underline('this is a bold green underlined message'))));
console.log(c.bold(c.red(util.format('%s:%s', 'foo', 'bar', 'baz'))));
console.log(c.bold(c.bold(util.format('%s:%s:%s', 'foo', c.red('bar'), 'baz'))));
console.log(c.red('Some', 'red', 'text', 'to', 'display'));
