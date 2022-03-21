import React, { useState, useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "react-jss";
import { buildTheme } from "./theme/theme";
import { AppContext, defaultContext } from "./Context";
import ChatApp from "./components/ChatApp";
import WindowFocusHandler from "./utils/windowFocus";
import { consoleBranding } from "./utils/brand";

const Main = (): JSX.Element => {
  const { selectedTheme } = useContext(AppContext);
  const applicableTheme = buildTheme(selectedTheme);
  // @ts-ignore
  window.theme = applicableTheme; // eslint-disable-line
  useEffect(() => {
    //consoleBranding();
  }, []);
  return (
    <ThemeProvider theme={applicableTheme}>
      <ChatApp />
    </ThemeProvider>
  );
};

const Context = (): JSX.Element => {
  const [selectedTheme, setSelectedTheme] = useState(
    defaultContext.selectedTheme
  );
  const [systemConfig, setSystemConfig] = useState(defaultContext.systemConfig);
  const [newMessagesWaiting, setNewMessagesWaiting] = useState(
    defaultContext.newMessagesWaiting
  );
  return (
    <AppContext.Provider
      value={{
        selectedTheme,
        setSelectedTheme,
        systemConfig,
        setSystemConfig,
        newMessagesWaiting,
        setNewMessagesWaiting,
      }}
    >
      <WindowFocusHandler />
      <Main />
    </AppContext.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Context />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
