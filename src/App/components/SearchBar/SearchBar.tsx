import * as React from "react";

import styles from "./SearchBar.module.scss";

export type SearchBarType = {
  color?: string;
};

const runSearch = (searchParam: string) => {
  console.log(searchParam);
  return null;
};

const SearchBar: React.SFC<SearchBarType> = ({ color = "blue" }) => {
  return (
    <form>
      <h1 className={styles[color]}>Hello, Search For Chicken</h1>
      <input type="text" />
      <button onClick={() => runSearch("chicken")} />
    </form>
  );
};

export default SearchBar;
