import * as React from "react";

import styles from "./InputBox.module.scss";

import { Button as BSButton } from "reactstrap";

export type InputBoxType = {
  onChange: (e: string) => void;
  onClick: () => void;
  entry: string;
};

const InputBox: React.SFC<InputBoxType> = ({ onChange, onClick, entry }) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        value={entry}
        onChange={e => onChange(e.target.value)}
      />
      <BSButton onClick={onClick} color="primary">
        Add
      </BSButton>
    </div>
  );
};

export default InputBox;
