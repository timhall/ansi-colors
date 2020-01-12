"use strict";

require("mocha");
const assert = require("assert");
const decache = require("decache");
const colors = require("./");

describe("ansi-colors", () => {
  it("should wrap a string with ansi codes:", () => {
    assert.equal(colors.bgBlack("string"), "\u001b[40mstring\u001b[49m");
    assert.equal(colors.bgBlue("string"), "\u001b[44mstring\u001b[49m");
    assert.equal(colors.bgCyan("string"), "\u001b[46mstring\u001b[49m");
    assert.equal(colors.bgGreen("string"), "\u001b[42mstring\u001b[49m");
    assert.equal(colors.bgMagenta("string"), "\u001b[45mstring\u001b[49m");
    assert.equal(colors.bgRed("string"), "\u001b[41mstring\u001b[49m");
    assert.equal(colors.bgWhite("string"), "\u001b[47mstring\u001b[49m");
    assert.equal(colors.bgYellow("string"), "\u001b[43mstring\u001b[49m");
    assert.equal(colors.black("string"), "\u001b[30mstring\u001b[39m");
    assert.equal(colors.blue("string"), "\u001b[34mstring\u001b[39m");
    assert.equal(colors.bold("string"), "\u001b[1mstring\u001b[22m");
    assert.equal(colors.cyan("string"), "\u001b[36mstring\u001b[39m");
    assert.equal(colors.dim("string"), "\u001b[2mstring\u001b[22m");
    assert.equal(colors.gray("string"), "\u001b[90mstring\u001b[39m");
    assert.equal(colors.green("string"), "\u001b[32mstring\u001b[39m");
    assert.equal(colors.hidden("string"), "\u001b[8mstring\u001b[28m");
    assert.equal(colors.inverse("string"), "\u001b[7mstring\u001b[27m");
    assert.equal(colors.italic("string"), "\u001b[3mstring\u001b[23m");
    assert.equal(colors.magenta("string"), "\u001b[35mstring\u001b[39m");
    assert.equal(colors.red("string"), "\u001b[31mstring\u001b[39m");
    assert.equal(colors.reset("string"), "\u001b[0mstring\u001b[0m");
    assert.equal(colors.strikethrough("string"), "\u001b[9mstring\u001b[29m");
    assert.equal(colors.underline("string"), "\u001b[4mstring\u001b[24m");
    assert.equal(colors.white("string"), "\u001b[37mstring\u001b[39m");
    assert.equal(colors.yellow("string"), "\u001b[33mstring\u001b[39m");
  });

  describe("nesting", () => {
    it("should correctly wrap the colors on nested colors", () => {
      assert.equal(
        colors.red(`R${colors.green(`G${colors.blue("B")}G`)}R`),
        "\u001b[31mR\u001b[32mG\u001b[34mB\u001b[39m\u001b[31m\u001b[32mG\u001b[39m\u001b[31mR\u001b[39m"
      );
    });
  });

  describe("newlines", () => {
    it("should correctly wrap colors around newlines", () => {
      assert.equal(
        colors.bgRed("foo\nbar") + "baz qux",
        "\u001b[41mfoo\u001b[49m\n\u001b[41mbar\u001b[49mbaz qux"
      );
    });
  });

  describe("enabled", () => {
    it("should disable ansi styling when colors.enabled is false", () => {
      colors.enabled = false;
      assert.equal(colors.red("foo bar"), "foo bar");
      assert.equal(colors.blue("foo bar"), "foo bar");
      assert.equal(colors.bold("foo bar"), "foo bar");
      colors.enabled = true;
    });
  });

  describe("FORCE_COLOR", () => {
    beforeEach(() => {
      delete process.env.FORCE_COLOR;
      decache("./");
    });

    it("should be enabled if FORCE_COLOR is not set", () => {
      const colors = require("./");
      assert.equal(colors.enabled, true);
    });

    it("should be enabled if FORCE_COLOR is set to 1", () => {
      process.env.FORCE_COLOR = "1";
      const colors = require("./");
      assert.equal(colors.enabled, true);
    });

    it("should be disabled if FORCE_COLOR is set to 0", () => {
      process.env.FORCE_COLOR = "0";
      const colors = require("./");
      assert.equal(colors.enabled, false);
    });
  });

  describe("visible", () => {
    it("should mute output when colors.visible is false", () => {
      colors.visible = false;
      assert.equal(colors.red("foo bar"), "");
      assert.equal(colors.blue("foo bar"), "");
      assert.equal(colors.bold("foo bar"), "");
      colors.visible = true;
    });
  });

  describe("stripColor", () => {
    it("should strip ANSI codes", () => {
      assert.equal(
        colors.stripColor(colors.blue("foo bar baz")),
        "foo bar baz"
      );
    });
  });

  describe("hasColor", () => {
    it("should return true if a string has ansi styling", () => {
      assert(colors.hasColor(colors.blue("foo bar baz")));
    });

    it("should return false if a string does not have ansi styling", () => {
      assert(!colors.hasColor("foo bar baz"));
    });

    it("should return true when used multiple times", () => {
      assert(colors.hasColor(colors.blue("foo bar baz")));
      assert(colors.hasColor(colors.blue("foo bar baz")));
      assert(colors.hasColor(colors.blue("foo bar baz")));
      assert(colors.hasColor(colors.blue("foo bar baz")));
      assert(colors.hasColor(colors.blue("foo bar baz")));
    });
  });
});
