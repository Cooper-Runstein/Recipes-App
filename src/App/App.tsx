// Imports
import * as React from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

// Components
import Header from "./components/Header";
// import RecipesResults from "./components/RecipesResults";
import SearchBar from "./components/SearchBar";

// Models
// import Recipe, { RecipeType } from "service/models/recipe";

const App = (props: any) => {
  return (
    <>
      <Header />
      <h1>Food App Thingy</h1>
      {
        // <button onClick={() => props.dispatch(entryFunc("entry"))}>
        // Test redux action
        // </button>
      }
      <SearchBar color={"blue"} />

      {
        // <RecipesResults recipes={this.state.recipes} />
      }
    </>
  );
};

const mapStateToProps = (state: any) => ({
  entry: state.entry
});

export default connect(mapStateToProps)(App);
