import * as React from "react";

export interface ISearchBar {
  color?: string;
}

const runSearch = (searchParam: string) => {
  console.log(searchParam);
  return null;
};

const SearchBar: React.SFC<ISearchBar> = ({ color }) => {
  return (
    <form>
      <input type="text" />
      <button onClick={() => runSearch("chicken")} />
    </form>
  );
};

export default SearchBar;
