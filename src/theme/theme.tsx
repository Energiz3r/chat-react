import { buildPalette, ThemeOptions } from "./colours";
import { lighten } from "../utils/lighten";
import { modal } from "./modal";
import { link } from "./link";
import { button } from "./button";

export const themeCommon = (palette: any, options: ThemeOptions) => {
  const dark = options.style === "dark";
  return {
    widthBreakpoint: "40rem",
    heightBreakpoint: "45rem",
    defaultAppSize: "62.5%", //62.5% will mean that .1rem = 1px

    //Break points NOTE - these also need to be altered in ./components/WindowResize.js - ???
    verticalBreakPoint: "20rem",
    horizontalTimestampBreakPoint: "70rem",

    sSize: "1.2rem",
    mSize: "1.6rem",
    lSize: "3.2rem",
    xlSize: "4.8rem",

    barHeight: "3rem",
    elementMargin: "0.2rem",
    elementMarginH: "0.1rem", //should be half of elementMargin
    elementBorder: "0.1rem",
    channelListPadding: "0.4rem 1.4rem 0.4rem 1.5rem", //padding for channel name list
    userListPadding: "0.4rem 1.4rem 0.4rem 0.4rem", //padding for username list

    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),

    themeColor: palette.themeColor,

    background: dark ? "black" : palette.lighterShade,

    shadowColor: palette.shadow,
    colorBase: palette.darkShade,
    fontColorHover: palette.darkerShade,

    currentUserMessageColor: palette.userRed,
    systemMessageColor: palette.systemOrange,
    adminMessageColor: palette.adminGreen,
    otherUserMessageColor: palette.themeColor,
    voiceUserMessageColor: palette.themeColor,

    pingGoodColor: palette.good,
    pingOKColor: palette.ok,
    pingBadColor: palette.bad,

    containerDividerColor: palette.mediumShade,

    channelSelectedBorder: palette.white,
    channelCurrent: palette.white,
    channelNewNotification: palette.systemOrange,
    channelNewMessage: palette.neonGreen,
    channelMention: palette.neonPink,
    channelNotJoined: palette.darkerShade,

    fontColorDefault: palette.fontDefault,
    fontColorSubtle: palette.fontSubtle,
    fontColorSelected: palette.focus,
    borderColor: palette.border,
    channelCurrentBackground: palette.darkerShade,

    scrollTrack: palette.border,
    scrollTrackHover: palette.border,
    scrollThumb: palette.themeColor,
    scrollThumbHover: palette.themeColor,

    baseShade: palette.baseShade,
    focus: palette.focus,
    fontDefault: palette.fontDefault,
    fontSubtle: palette.fontSubtle,
    border: palette.border,

    ...button(palette),
    ...link(palette),
    ...modal(palette, options),
    lighten,
  };
};

export const themeDark = (palette: any, options: ThemeOptions) => {
  const common = themeCommon(palette, options);
  return {
    ...common,
  };
};

export const themeLight = (palette: any, options: ThemeOptions) => {
  const common = themeCommon(palette, options);
  return {
    ...common,
  };
};

export const buildTheme = (options: ThemeOptions): any => {
  const palette = buildPalette(options);
  return {
    ...(options.style === "dark"
      ? themeDark(palette, options)
      : themeLight(palette, options)),
    themeStyle: options.style,
  };
};
