'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/* eslint-disable no-control-regex */
// this is a modified version of https://github.com/chalk/ansiColor-regex (MIT License)
const ANSI_REGEX = /[\u001b\u009b][[\]#;?()]*(?:(?:(?:[^\W_]*;?[^\W_]*)\u0007)|(?:(?:[0-9]{1,4}(;[0-9]{0,4})*)?[~0-9=<>cf-nqrtyA-PRZ]))/g;
exports.enabled = "FORCE_COLOR" in process.env ? process.env.FORCE_COLOR !== "0" : true;
exports.visible = true;
function defineColor([open_code, close_code]) {
    const open = `\u001b[${open_code}m`;
    const close = `\u001b[${close_code}m`;
    const regex = new RegExp(`\\u001b\\[${close_code}m`, "g");
    const color = input => {
        if (!input)
            return "";
        if (exports.enabled === false)
            return input;
        if (exports.visible === false)
            return "";
        if (input.includes(close)) {
            input = input.replace(regex, close + open);
        }
        if (input.includes("\n")) {
            input = input.replace(/\r*\n/g, `${close}$&${open}`);
        }
        return open + input + close;
    };
    return color;
}
const reset = defineColor([0, 0]);
const bold = defineColor([1, 22]);
const dim = defineColor([2, 22]);
const italic = defineColor([3, 23]);
const underline = defineColor([4, 24]);
const inverse = defineColor([7, 27]);
const hidden = defineColor([8, 28]);
const strikethrough = defineColor([9, 29]);
const black = defineColor([30, 39]);
const red = defineColor([31, 39]);
const green = defineColor([32, 39]);
const yellow = defineColor([33, 39]);
const blue = defineColor([34, 39]);
const magenta = defineColor([35, 39]);
const cyan = defineColor([36, 39]);
const white = defineColor([37, 39]);
const gray = defineColor([90, 39]);
const grey = defineColor([90, 39]);
const bgBlack = defineColor([40, 49]);
const bgRed = defineColor([41, 49]);
const bgGreen = defineColor([42, 49]);
const bgYellow = defineColor([43, 49]);
const bgBlue = defineColor([44, 49]);
const bgMagenta = defineColor([45, 49]);
const bgCyan = defineColor([46, 49]);
const bgWhite = defineColor([47, 49]);
const blackBright = defineColor([90, 39]);
const redBright = defineColor([91, 39]);
const greenBright = defineColor([92, 39]);
const yellowBright = defineColor([93, 39]);
const blueBright = defineColor([94, 39]);
const magentaBright = defineColor([95, 39]);
const cyanBright = defineColor([96, 39]);
const whiteBright = defineColor([97, 39]);
const bgBlackBright = defineColor([100, 49]);
const bgRedBright = defineColor([101, 49]);
const bgGreenBright = defineColor([102, 49]);
const bgYellowBright = defineColor([103, 49]);
const bgBlueBright = defineColor([104, 49]);
const bgMagentaBright = defineColor([105, 49]);
const bgCyanBright = defineColor([106, 49]);
const bgWhiteBright = defineColor([107, 49]);
function stripColor(value) {
    if (typeof value === "string" && value !== "") {
        return value.replace(ANSI_REGEX, "");
    }
    return "";
}
function hasColor(value) {
    ANSI_REGEX.lastIndex = 0;
    return typeof value === "string" && value !== "" && ANSI_REGEX.test(value);
}

const isHyper = process.env.TERM_PROGRAM === "Hyper";
const isWindows = process.platform === "win32";
const isLinux = process.platform === "linux";
const ballotDisabled = "☒";
const ballotOff = "☐";
const ballotOn = "☑";
const bullet = "•";
const bulletWhite = "◦";
const fullBlock = "█";
const heart = "❤";
const identicalTo = "≡";
const line = "─";
const mark = "※";
const middot = "·";
const minus = "－";
const multiplication = "×";
const obelus = "÷";
const pencilDownRight = "✎";
const pencilRight = "✏";
const pencilUpRight = "✐";
const percent = "%";
const pilcrow2 = "❡";
const pilcrow = "¶";
const plusMinus = "±";
const section = "§";
const starsOff = "☆";
const starsOn = "★";
const upDownArrow = "↕";
const check = isWindows && !isHyper ? "√" : "✔";
const cross = isWindows && !isHyper ? "×" : "✖";
const ellipsisLarge = isWindows && !isHyper ? "..." : "⋯";
const ellipsis = isWindows && !isHyper ? "..." : "…";
const info = isWindows && !isHyper ? "i" : "ℹ";
const question = isWindows && !isHyper ? "?" : "?";
const questionSmall = isWindows && !isHyper ? "?" : "﹖";
const pointer = isWindows && !isHyper ? ">" : isLinux ? "▸" : "❯";
const pointerSmall = isWindows && !isHyper ? "»" : isLinux ? "‣" : "›";
const radioOff = isWindows && !isHyper ? "( )" : "◯";
const radioOn = isWindows && !isHyper ? "(*)" : "◉";
const warning = isWindows && !isHyper ? "‼" : "⚠";

exports.ballotDisabled = ballotDisabled;
exports.ballotOff = ballotOff;
exports.ballotOn = ballotOn;
exports.bgBlack = bgBlack;
exports.bgBlackBright = bgBlackBright;
exports.bgBlue = bgBlue;
exports.bgBlueBright = bgBlueBright;
exports.bgCyan = bgCyan;
exports.bgCyanBright = bgCyanBright;
exports.bgGreen = bgGreen;
exports.bgGreenBright = bgGreenBright;
exports.bgMagenta = bgMagenta;
exports.bgMagentaBright = bgMagentaBright;
exports.bgRed = bgRed;
exports.bgRedBright = bgRedBright;
exports.bgWhite = bgWhite;
exports.bgWhiteBright = bgWhiteBright;
exports.bgYellow = bgYellow;
exports.bgYellowBright = bgYellowBright;
exports.black = black;
exports.blackBright = blackBright;
exports.blue = blue;
exports.blueBright = blueBright;
exports.bold = bold;
exports.bullet = bullet;
exports.bulletWhite = bulletWhite;
exports.check = check;
exports.cross = cross;
exports.cyan = cyan;
exports.cyanBright = cyanBright;
exports.dim = dim;
exports.ellipsis = ellipsis;
exports.ellipsisLarge = ellipsisLarge;
exports.fullBlock = fullBlock;
exports.gray = gray;
exports.green = green;
exports.greenBright = greenBright;
exports.grey = grey;
exports.hasColor = hasColor;
exports.heart = heart;
exports.hidden = hidden;
exports.identicalTo = identicalTo;
exports.info = info;
exports.inverse = inverse;
exports.italic = italic;
exports.line = line;
exports.magenta = magenta;
exports.magentaBright = magentaBright;
exports.mark = mark;
exports.middot = middot;
exports.minus = minus;
exports.multiplication = multiplication;
exports.obelus = obelus;
exports.pencilDownRight = pencilDownRight;
exports.pencilRight = pencilRight;
exports.pencilUpRight = pencilUpRight;
exports.percent = percent;
exports.pilcrow = pilcrow;
exports.pilcrow2 = pilcrow2;
exports.plusMinus = plusMinus;
exports.pointer = pointer;
exports.pointerSmall = pointerSmall;
exports.question = question;
exports.questionSmall = questionSmall;
exports.radioOff = radioOff;
exports.radioOn = radioOn;
exports.red = red;
exports.redBright = redBright;
exports.reset = reset;
exports.section = section;
exports.starsOff = starsOff;
exports.starsOn = starsOn;
exports.strikethrough = strikethrough;
exports.stripColor = stripColor;
exports.underline = underline;
exports.upDownArrow = upDownArrow;
exports.warning = warning;
exports.white = white;
exports.whiteBright = whiteBright;
exports.yellow = yellow;
exports.yellowBright = yellowBright;
