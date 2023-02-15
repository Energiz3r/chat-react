import { useState, useContext } from "react";
import { useStyles } from "./UserLoginForm.styles";
import { useTheme } from "react-jss";
import TermsAndConditions from "./TermsAndConditions";
import { AppContext } from "../../Context";

const UserLoginForm = (): JSX.Element => {
  const { nickMinLength, nickMaxLength } = useContext(AppContext).systemConfig;
  const theme = useTheme();
  const styles = useStyles({ theme });

  const [nick, setNick] = useState(`User${Math.round(Math.random() * 10000)}`);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [awaitingLogin, setAwaitingLogin] = useState(false);

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    setAwaitingLogin(true);
  };

  const onNickChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (!value || value.match(/^[a-zA-Z0-9_-]*$/)) setNick(value);
  };

  const noValidChannelsSelected = false; // temporary
  // channels.filter(
  //   (channel) =>
  //     channel.isDefault && channel.isSelectedInPicker == true
  // ).length < 1

  const termsOnChange = (accepted: boolean) => {
    setTermsAccepted(accepted);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onFormSubmit}>
        {/* {this.state.nickSetFailedReason != "" ? (
          <p className="nickSetFailedReason">
            {this.state.nickSetFailedReason}
          </p>
        ) : (
          ""
        )} */}

        <input
          className={styles.input}
          type="text"
          placeholder="Enter a nickname"
          onChange={onNickChange}
          value={nick}
          spellCheck="false"
        />

        <button
          className={styles.button}
          //check for conditions that would cause the button to be disabled
          disabled={
            !nick ||
            noValidChannelsSelected ||
            !termsAccepted ||
            nick.length < nickMinLength ||
            nick.length > nickMaxLength ||
            awaitingLogin
          }
        >
          {!awaitingLogin ? "Start chatting" : "Logging in... "}
          {awaitingLogin && <span className="fa fa-spinner fa-spin"></span>}
        </button>
      </form>
      <TermsAndConditions termsOnChange={termsOnChange} />
    </div>
  );
};

export default UserLoginForm;
