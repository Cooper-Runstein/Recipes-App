// Imports
import * as React from "react";
import { connect } from "react-redux";

import { normalizeStatus, searchFunc } from "../service/redux/searchActions";

import styles from "./App.module.scss";

// Components
import Header from "./components/Header";
import RecipesResults from "./components/RecipesResults/container";
import SearchBar from "./components/SearchBar/container";

const App = (props: any) => {
  if (props.isUpdating === true) {
    props.dispatch(searchFunc(props.ingredients));
  }

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.body}>
        <SearchBar color={"blue"} />
        <RecipesResults
          normalizeStatus={() => props.dispatch(normalizeStatus())}
          recipes={props.recipes}
          isUpdating={props.isUpdating}
          status={props.status}
          loading={props.isUpdating}
        />
      </div>
    </div>
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
