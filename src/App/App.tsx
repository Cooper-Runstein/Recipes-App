// Imports
import * as React from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

// Components
import Header from "./components/Header";
// import RecipesResults from "./components/RecipesResults";
import SearchBar from "./components/SearchBar/container";

const App = (props: any) => {
  return (
    <>
      <Header />
      <h1>Food App Thingy</h1>
      <SearchBar color={"blue"} />
      {
        // <RecipesResults recipes={this.state.recipes} />
      }
    </>
  );
};

export default connect()(App);
