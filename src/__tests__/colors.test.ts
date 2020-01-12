import * as colors from '../colors';

it('should wrap a string with ansi codes:', () => {
  expect(colors.bgBlack('string')).toEqual('\u001b[40mstring\u001b[49m');
  expect(colors.bgBlue('string')).toEqual('\u001b[44mstring\u001b[49m');
  expect(colors.bgCyan('string')).toEqual('\u001b[46mstring\u001b[49m');
  expect(colors.bgGreen('string')).toEqual('\u001b[42mstring\u001b[49m');
  expect(colors.bgMagenta('string')).toEqual('\u001b[45mstring\u001b[49m');
  expect(colors.bgRed('string')).toEqual('\u001b[41mstring\u001b[49m');
  expect(colors.bgWhite('string')).toEqual('\u001b[47mstring\u001b[49m');
  expect(colors.bgYellow('string')).toEqual('\u001b[43mstring\u001b[49m');
  expect(colors.black('string')).toEqual('\u001b[30mstring\u001b[39m');
  expect(colors.blue('string')).toEqual('\u001b[34mstring\u001b[39m');
  expect(colors.bold('string')).toEqual('\u001b[1mstring\u001b[22m');
  expect(colors.cyan('string')).toEqual('\u001b[36mstring\u001b[39m');
  expect(colors.dim('string')).toEqual('\u001b[2mstring\u001b[22m');
  expect(colors.gray('string')).toEqual('\u001b[90mstring\u001b[39m');
  expect(colors.green('string')).toEqual('\u001b[32mstring\u001b[39m');
  expect(colors.hidden('string')).toEqual('\u001b[8mstring\u001b[28m');
  expect(colors.inverse('string')).toEqual('\u001b[7mstring\u001b[27m');
  expect(colors.italic('string')).toEqual('\u001b[3mstring\u001b[23m');
  expect(colors.magenta('string')).toEqual('\u001b[35mstring\u001b[39m');
  expect(colors.red('string')).toEqual('\u001b[31mstring\u001b[39m');
  expect(colors.reset('string')).toEqual('\u001b[0mstring\u001b[0m');
  expect(colors.strikethrough('string')).toEqual('\u001b[9mstring\u001b[29m');
  expect(colors.underline('string')).toEqual('\u001b[4mstring\u001b[24m');
  expect(colors.white('string')).toEqual('\u001b[37mstring\u001b[39m');
  expect(colors.yellow('string')).toEqual('\u001b[33mstring\u001b[39m');
});

describe('nesting', () => {
  it('should correctly wrap the colors on nested colors', () => {
    expect(colors.red(`R${colors.green(`G${colors.blue('B')}G`)}R`)).toEqual(
      '\u001b[31mR\u001b[32mG\u001b[34mB\u001b[39m\u001b[31m\u001b[32mG\u001b[39m\u001b[31mR\u001b[39m'
    );
  });
});

describe('newlines', () => {
  it('should correctly wrap colors around newlines', () => {
    expect(colors.bgRed('foo\nbar') + 'baz qux').toEqual(
      '\u001b[41mfoo\u001b[49m\n\u001b[41mbar\u001b[49mbaz qux'
    );
  });
});

describe('stripColor', () => {
  it('should strip ANSI codes', () => {
    expect(colors.stripColor(colors.blue('foo bar baz'))).toEqual('foo bar baz');
  });
});

describe('hasColor', () => {
  it('should return true if a string has ansi styling', () => {
    expect(colors.hasColor(colors.blue('foo bar baz'))).toBe(true);
  });

  it('should return false if a string does not have ansi styling', () => {
    expect(colors.hasColor('foo bar baz')).toBe(false);
  });

  it('should return true when used multiple times', () => {
    expect(colors.hasColor(colors.blue('foo bar baz'))).toBe(true);
    expect(colors.hasColor(colors.blue('foo bar baz'))).toBe(true);
    expect(colors.hasColor(colors.blue('foo bar baz'))).toBe(true);
    expect(colors.hasColor(colors.blue('foo bar baz'))).toBe(true);
    expect(colors.hasColor(colors.blue('foo bar baz'))).toBe(true);
  });
});
