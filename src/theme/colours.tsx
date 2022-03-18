type ThemeColors = Array<{ name: string; color: string }>;

// at some point maybe allow user selection
const themeColors: ThemeColors = [
  { name: "default", color: "rgb(128,128,128)" },
  { name: "blue", color: "rgb(81, 138, 219)" },
  { name: "red", color: "rgb(221, 0, 0)" },
  { name: "orange", color: "rgb(221, 81, 0)" },
  { name: "green", color: "rgb(0, 173, 9)" },
];

type ThemeColor = string;

const getThemeColor = (themeColor: ThemeColor) => {
  return (
    themeColors.find((col) => col.name === themeColor)?.color ||
    themeColors[0].color
  );
};

const palette = (style: string, themeColor: ThemeColor) => {
  const dark = style === "dark";
  const common = {
    themeColor: getThemeColor(themeColor),
    darkShade: "rgb(38,38,38)",
    darkerShade: "rgb(80,80,80)",
    mediumShade: "rgb(156,154,148)",
    lighterShade: "rgb(221, 221, 221)",
    brightShade: "rgb(255,255,255)",
    systemOrange: "rgb(255, 166, 0)",
    neonPink: "rgb(255, 0, 234)",
    neonGreen: "rgb(21, 255, 0)",

    shadow: "rgb(0,0,0)",
    userRed: "rgb(204, 0, 0)",
    adminGreen: "rgb(0, 128, 0)",

    good: "rgb(0, 148, 0)",
    ok: "rgb(221, 125, 0)",
    bad: "rgb(167, 0, 0)",
  };
  return {
    ...common,
    baseShade: dark ? common.darkShade : common.brightShade,
    focus: dark ? common.brightShade : common.mediumShade,
    fontDefault: dark ? "rgb(205,215,197)" : "rgb(38,38,38)",
    fontSubtle: dark ? "rgb(110, 110, 110)" : "rgb(183, 188, 197)",
    border: dark ? "rgb(53,54,56)" : "rgb(226, 226, 226)", // previously: surround
  };
};

export interface ThemeOptions {
  style: "dark" | "light";
  color: "default" | "blue" | "red" | "orange" | "green";
}

export const buildPalette = ({ style, color }: ThemeOptions) => {
  return palette(style, color);
};
