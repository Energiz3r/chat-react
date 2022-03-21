export const IRCcolors = (dark: boolean) => {
  return [
    { colorName: "default", rgbValue: dark ? "205,215,197" : "38,38,38" }, // off-white for dark theme, grey for light theme
    { colorName: "Black", rgbValue: "0,0,0" },
    { colorName: "Blue", rgbValue: "0,0,127" },
    { colorName: "Green", rgbValue: "0,147,0" },
    { colorName: "LightRed", rgbValue: "255,0,0" },
    { colorName: "Brown", rgbValue: "127,0,0" },
    { colorName: "Purple", rgbValue: "156,0,156" },
    { colorName: "Orange", rgbValue: "252,127,0" },
    { colorName: "Yellow", rgbValue: "255,255,0" },
    { colorName: "LightGreen", rgbValue: "0,252,0" },
    { colorName: "Cyan", rgbValue: "0,147,147" },
    { colorName: "LightCyan", rgbValue: "0,255,255" },
    { colorName: "LightBlue", rgbValue: "0,0,252" },
    { colorName: "Pink", rgbValue: "255,0,255" },
    { colorName: "Grey", rgbValue: "127,127,127" },
    { colorName: "White", rgbValue: "255,255,255" },
  ];
};

export const fonts = [
  "Kavivanar",
  "Tajawal",
  "Source Sans Pro",
  "Indie Flower",
  "Inconsolata",
  "Dosis",
  "Quicksand",
  "Josefin Sans",
  "Abel",
  "Dancing Script",
  "Exo",
  "Kanit",
  "Ropa Sans",
  "Courgette",
  "Permanent Marker",
  "Orbitron",
  "Concert One",
  "Fredoka One",
  "Luckiest Guy",
  "Jura",
  "Kalam",
  "Marck Script",
  "Audiowide",
  "VT323",
  "Architects Daughter",
];

//accepts a color name string (from above) and returns a string (eg '65,65,180') for use with styling. if the string isn't found it returns the 'default' color
export const colorNameToRGB = (name: string, dark: boolean) => {
  const rgb = IRCcolors(dark).filter((color) => name === color.colorName)[0];
  if (rgb) {
    return rgb.rgbValue;
  } else {
    return IRCcolors(dark)[0].rgbValue;
  }
};
