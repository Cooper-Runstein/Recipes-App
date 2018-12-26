// Imports
import * as React from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

import { searchFunc } from "../service/redux/searchActions";

// Components
import Header from "./components/Header";
// import RecipesResults from "./components/RecipesResults/container";
import SearchBar from "./components/SearchBar/container";

const App = (props: any) => {
  if (props.isUpdating === true) {
    props.dispatch(searchFunc(props.ingredients));
  }

  return (
    <>
      <Header />
      <h1>Food App Thingy</h1>
      <SearchBar color={"blue"} />
      {
        // <RecipesResults recipes={} isUpdating={props.isUpdating} />
      }
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    ingredients: state.searchReducer.ingredients,
    isUpdating: state.searchReducer.isUpdating
  };
};

export default connect(mapStateToProps)(App);
