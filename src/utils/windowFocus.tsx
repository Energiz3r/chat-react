import { useEffect, useContext } from "react";
import { AppContext } from "../Context";

let flashOn = false;
let windowFocused = true;
let messagesWaiting = false;

const WindowFocusHandler = () => {
  const { newMessagesWaiting, setNewMessagesWaiting } = useContext(AppContext);
  const setFocus = (focus: boolean) => {
    if (focus && focus !== windowFocused) setNewMessagesWaiting(false);
    windowFocused = focus;
  };
  const onFocus = () => {
    setFocus(true);
  };
  const onBlur = () => {
    setFocus(false);
  };
  messagesWaiting = newMessagesWaiting;
  useEffect(() => {
    const interval = setInterval(() => {
      if (flashOn) {
        if (messagesWaiting && !windowFocused) {
          document.title = "New messages!";
        }
      } else {
        document.title = "BlazeChat";
      }
      flashOn = !flashOn;
    }, 600);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    window.addEventListener("focus", onFocus);
    window.addEventListener("blur", onBlur);
    return () => {
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("blur", onBlur);
    };
  }, []);

  return <></>;
};

export default WindowFocusHandler;
