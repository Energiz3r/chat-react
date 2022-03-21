import { useState } from "react";
import { useStyles } from "./TermsAndConditions.styles";
import { useTheme } from "react-jss";
import Checkbox from "../Checkbox";

interface Props {
  termsOnChange: (accepted: boolean) => void;
}

const TermsAndConditions = ({ termsOnChange }: Props): JSX.Element => {
  const theme = useTheme();
  const styles = useStyles({ theme });
  return (
    <div className={styles.container}>
      <p className={styles.paragraph}>
        Accept{" "}
        <a href="/terms.html" className={styles.link}>
          terms and conditions
        </a>
        ?
      </p>

      <Checkbox width={4} onChange={termsOnChange} />
    </div>
  );
};

export default TermsAndConditions;
