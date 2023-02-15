import { createContext } from "react";
import { ThemeOptions } from "./theme/colours";

export type DefaultContext = {
  selectedTheme: ThemeOptions;
  setSelectedTheme: (themeOptions: ThemeOptions) => void;
  systemConfig: {
    maxTimestamp: number; //the maximum timestamp (ms) allowed on messages for sanity checking. 1893456000000 = 01/01/2030 @ 12:00am (UTC)
    maxMessageLength: number; //IRC standard (512 including trailing CR)
    nickMinLength: number;
    nickMaxLength: number;
    systemNick: string; //the nickname of messages which originate from the System
    maxPastedImageSize: number; //max size in bytes of images that can be pasted (1800kb)
    logLevel: number;
  };
  setSystemConfig: (themeOptions: any) => void;
  newMessagesWaiting: boolean;
  setNewMessagesWaiting: (arg0: boolean) => void;
};

export const defaultContext: DefaultContext = {
  selectedTheme: {
    style: "dark",
    color: "green",
  },
  setSelectedTheme: () => {},
  systemConfig: {
    maxTimestamp: 1893456000000, //the maximum timestamp (ms) allowed on messages for sanity checking. 1893456000000 = 01/01/2030 @ 12:00am (UTC)
    maxMessageLength: 510, //IRC standard (512 including trailing CR)
    nickMinLength: 3,
    nickMaxLength: 20,
    systemNick: "*", //the nickname of messages which originate from the System
    maxPastedImageSize: 1800000, //max size in bytes of images that can be pasted (1800kb)
    logLevel: 2, // 1 = all messages, 2 = error messages and chat messages only, 3 = chat messages only, 4 = no logging
  },
  setSystemConfig: () => {},
  newMessagesWaiting: false,
  setNewMessagesWaiting: () => {},
};

export const AppContext = createContext<DefaultContext>(defaultContext);
