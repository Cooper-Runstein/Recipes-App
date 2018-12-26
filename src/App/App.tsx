// Imports
import * as React from "react";
import { connect } from "react-redux";

import { searchFunc } from "../service/redux/searchActions";

// Components
import Header from "./components/Header";
import RecipesResults from "./components/RecipesResults/container";
import SearchBar from "./components/SearchBar/container";

const App = (props: any) => {
  if (props.isUpdating === true) {
    props.dispatch(searchFunc(props.ingredients));
  }

  return (
    <>
      <Header />
      <SearchBar color={"blue"} />
      <RecipesResults
        recipes={props.recipes}
        isUpdating={props.isUpdating}
        status={props.status}
      />
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    ingredients: state.searchReducer.ingredients,
    isUpdating: state.searchReducer.isUpdating,
    recipes: state.searchReducer.recipes,
    status: state.searchReducer.status
  };
};

export default connect(mapStateToProps)(App);
