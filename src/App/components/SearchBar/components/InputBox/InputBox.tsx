import * as React from "react";

export type InputBoxType = {
  onChange: (e: string) => void;
  onClick: () => void;
  entry: string;
};

const InputBox: React.SFC<InputBoxType> = ({ onChange, onClick, entry }) => {
  console.log(entry);
  return (
    <>
      <input
        type="text"
        value={entry}
        onChange={e => onChange(e.target.value)}
      />
      <button onClick={onClick}>Click me!</button>
    </>
  );
};

export default InputBox;
