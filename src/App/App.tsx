import * as React from "react";

import SearchBar from "./components/SearchBar";

class App extends React.Component {
  public render() {
    return (
      <>
        <h1>Food App Thingy</h1>
        <SearchBar color="red" />
      </>
    );
  }
}

export default App;
