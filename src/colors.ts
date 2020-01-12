/* eslint-disable no-control-regex */
// this is a modified version of https://github.com/chalk/ansiColor-regex (MIT License)
const ANSI_REGEX = /[\u001b\u009b][[\]#;?()]*(?:(?:(?:[^\W_]*;?[^\W_]*)\u0007)|(?:(?:[0-9]{1,4}(;[0-9]{0,4})*)?[~0-9=<>cf-nqrtyA-PRZ]))/g;

export let enabled: boolean;
enabled = "FORCE_COLOR" in process.env ? process.env.FORCE_COLOR !== "0" : true;

// Explicitly set visible (instead of initializer)
// to avoid constant removal by rollup
export let visible: boolean;
visible = true;

type Color = (input: string) => string;
type ColorCodes = [number, number];

function defineColor([open_code, close_code]: ColorCodes): Color {
  const open = `\u001b[${open_code}m`;
  const close = `\u001b[${close_code}m`;
  const regex = new RegExp(`\\u001b\\[${close_code}m`, "g");

  const color: Color = input => {
    if (!input) return "";
    if (enabled === false) return input;
    if (visible === false) return "";

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

export const reset = defineColor([0, 0]);
export const bold = defineColor([1, 22]);
export const dim = defineColor([2, 22]);
export const italic = defineColor([3, 23]);
export const underline = defineColor([4, 24]);
export const inverse = defineColor([7, 27]);
export const hidden = defineColor([8, 28]);
export const strikethrough = defineColor([9, 29]);

export const black = defineColor([30, 39]);
export const red = defineColor([31, 39]);
export const green = defineColor([32, 39]);
export const yellow = defineColor([33, 39]);
export const blue = defineColor([34, 39]);
export const magenta = defineColor([35, 39]);
export const cyan = defineColor([36, 39]);
export const white = defineColor([37, 39]);
export const gray = defineColor([90, 39]);
export const grey = defineColor([90, 39]);

export const bgBlack = defineColor([40, 49]);
export const bgRed = defineColor([41, 49]);
export const bgGreen = defineColor([42, 49]);
export const bgYellow = defineColor([43, 49]);
export const bgBlue = defineColor([44, 49]);
export const bgMagenta = defineColor([45, 49]);
export const bgCyan = defineColor([46, 49]);
export const bgWhite = defineColor([47, 49]);

export const blackBright = defineColor([90, 39]);
export const redBright = defineColor([91, 39]);
export const greenBright = defineColor([92, 39]);
export const yellowBright = defineColor([93, 39]);
export const blueBright = defineColor([94, 39]);
export const magentaBright = defineColor([95, 39]);
export const cyanBright = defineColor([96, 39]);
export const whiteBright = defineColor([97, 39]);

export const bgBlackBright = defineColor([100, 49]);
export const bgRedBright = defineColor([101, 49]);
export const bgGreenBright = defineColor([102, 49]);
export const bgYellowBright = defineColor([103, 49]);
export const bgBlueBright = defineColor([104, 49]);
export const bgMagentaBright = defineColor([105, 49]);
export const bgCyanBright = defineColor([106, 49]);
export const bgWhiteBright = defineColor([107, 49]);

export function stripColor(value: string): string {
  if (typeof value === "string" && value !== "") {
    return value.replace(ANSI_REGEX, "");
  }
  return "";
}

export function hasColor(value: string): boolean {
  ANSI_REGEX.lastIndex = 0;
  return typeof value === "string" && value !== "" && ANSI_REGEX.test(value);
}
