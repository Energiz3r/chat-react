import { useState } from "react";
import { useStyles } from "./Login.styles";
import { useTheme } from "react-jss";
import Modal from "../Modal";
import ModalTabs from "../ModalTabs";
import Animate from "../../utils/Animate";
import GuestLoginForm from "./GuestLoginForm";

const Login = (): JSX.Element => {
  const tabs = ["Guest", "Login", "Register"];
  const theme = useTheme();
  const styles = useStyles({ theme });
  const [selectedTab, setSelectedTab] = useState("Guest");
  const onChangeTab = (tab: string) => {
    setSelectedTab(tab);
  };
  return (
    <Modal>
      <ModalTabs tabs={tabs} onSelect={onChangeTab} />

      <div className="login-option-container">
        <Animate visible={selectedTab === "Guest"} direction="down">
          <GuestLoginForm />
        </Animate>
        <Animate visible={selectedTab === "Login"}>
          {/* <UserLoginForm /> */}
        </Animate>
        <Animate visible={selectedTab === "Register"}>
          {/* <CreateLoginForm /> */}
        </Animate>
      </div>

      {selectedTab !== "Register" && (
        <div className="containerChannelPicker">
          {/* <ChannelPicker showDefaultChannels={true} /> */}
        </div>
      )}
    </Modal>
  );
};

export default Login;
