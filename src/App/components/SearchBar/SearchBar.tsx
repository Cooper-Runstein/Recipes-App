import * as React from "react";

import styles from "./SearchBar.module.scss";

export type SearchBarType = {
  color?: string;
  submitFunc: (...args: any) => void;
  entryFunc: (...args: any) => void;
  textEntryValue: string;
};

const SearchBar: React.SFC<SearchBarType> = ({
  color = "blue",
  submitFunc,
  entryFunc,
  textEntryValue
}) => {
  return (
    <>
      <h1 className={styles[color]}>Hello, Search For Chicken</h1>
      <input
        type="text"
        value={textEntryValue}
        onChange={e => entryFunc(e.target.value)}
      />
      <button onClick={() => submitFunc()}>Click me!</button>
    </>
  );
};

export default SearchBar;
