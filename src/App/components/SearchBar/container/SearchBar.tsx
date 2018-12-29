import * as React from "react";

import styles from "./SearchBar.module.scss";

import { connect } from "react-redux";

import InputBox from "../components/InputBox";
import Settings from "../components/Settings";

import {
  entryFunc,
  removeIngredient,
  submitFunc
} from "../../../../service/redux/searchActions";
import IngredientsDisplay from "../components/IngredientsDisplay/index";

export type SearchBarProps = {
  color: string;
  entry: string;
  ingredients: string[];
  dispatch: (arg: any) => void;
};

class SearchBar extends React.Component<SearchBarProps> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.header}>Ingredients</h1>
        <Settings />
        <InputBox
          onChange={(e: string) => this.props.dispatch(entryFunc(e))}
          onClick={() => this.props.dispatch(submitFunc())}
          entry={this.props.entry}
        />
        <IngredientsDisplay
          ingredients={this.props.ingredients}
          removeFunction={(i: string) =>
            this.props.dispatch(removeIngredient(i))
          }
        />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    entry: state.searchReducer.entry,
    ingredients: state.searchReducer.ingredients
  };
};

export default connect(mapStateToProps)(SearchBar);
