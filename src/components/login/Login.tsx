import { useState } from "react";
import { useStyles } from "./Login.styles";
import { useTheme } from "react-jss";
import Modal from "../Modal";
import ModalTabs from "../ModalTabs";
import Animate from "../../utils/Animate";
import GuestLogin from "./GuestLogin";

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
        <Animate visible={selectedTab === "Guest"}>
          <GuestLogin />
        </Animate>
        <Animate visible={selectedTab === "Login"}>
          {/* <LoginUserForm /> */}
        </Animate>
        <Animate visible={selectedTab === "Register"}>
          {/* <LoginCreateForm /> */}
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
