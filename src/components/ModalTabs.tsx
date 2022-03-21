import { useState } from "react";
import { useStyles, useStylesTab } from "./ModalTabs.styles";
import { useTheme } from "react-jss";

interface TabProps {
  text: string;
  onTabClick: (text: string) => void;
  selected: boolean;
}

const ModalTab = ({ text, onTabClick, selected }: TabProps): JSX.Element => {
  const theme = useTheme();
  const styles = useStylesTab({ theme });
  const onSelect = () => {
    onTabClick(text);
  };
  return (
    <div
      className={`${styles.tab} ${selected ? styles.tabSelected : ""}`}
      onClick={onSelect}
    >
      <h1 className={styles.label}>{text}</h1>
    </div>
  );
};

interface Props {
  tabs: Array<string>;
  onSelect: (tabName: string) => void;
}

const ModalTabs = ({ tabs, onSelect }: Props): JSX.Element => {
  const theme = useTheme();
  const styles = useStyles({ theme });
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const onTabClick = (text: string) => {
    setSelectedTab(text);
    onSelect(text);
  };
  return (
    <div className={styles.tabsContainer}>
      {tabs.map((tab) => (
        <ModalTab
          key={tab}
          text={tab}
          onTabClick={onTabClick}
          selected={tab === selectedTab}
        />
      ))}
    </div>
  );
};

export default ModalTabs;
