const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(num, min), max);

const lightnessAdjust = (rgb: Array<any>, percent: number) => {
  const max = Math.max(...rgb);
  const min = Math.min(...rgb);
  const amt = Math.round(min * ((percent + 100) / 100) - min);
  return rgb.map((col) => clamp(parseFloat(col) + amt, 0, max));
};

const brightnessAdjust = (rgb: Array<any>, percent: number) => {
  return rgb.map((col) => clamp(col * ((percent + 100) / 100), 0, 255));
};

export const lighten = (color: string, percent: number) => {
  const rgb: any = color
    .substring(4, color.length - 1)
    .replace(/ /g, "")
    .split(",");
  const rgbAdjusted = lightnessAdjust(rgb, percent);
  return `rgb(${rgbAdjusted[0]},${rgbAdjusted[1]},${rgbAdjusted[2]})`;
};

export const brighten = (color: string, percent: number) => {
  const rgb: any = color
    .substring(4, color.length - 1)
    .replace(/ /g, "")
    .split(",");
  const rgbAdjusted = brightnessAdjust(rgb, percent);
  return `rgb(${rgbAdjusted[0]},${rgbAdjusted[1]},${rgbAdjusted[2]})`;
};
