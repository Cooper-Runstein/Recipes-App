import * as React from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

class App extends React.Component {
  public render() {
    return (
      <>
        <Header />
        <h1>Food App Thingy</h1>
        <SearchBar />
      </>
    );
  }
}

export default App;
