import * as React from "react";

import styles from "./SearchBar.module.scss";

import { connect } from "react-redux";

import InputBox from "../components/InputBox";
import Settings from "../components/Settings";

import {
  activateSettings,
  changeVeg,
  entryFunc,
  removeIngredient,
  submitFunc
} from "../../../../service/redux/searchActions";
import IngredientsDisplay from "../components/IngredientsDisplay/index";

import { Veg } from "typings/globalEnums";

export type SearchBarProps = {
  color: string;
  entry: string;
  ingredients: string[];
  dispatch: (arg: any) => void;
  settingsActive: boolean;
  veg: Veg;
};

class SearchBar extends React.Component<SearchBarProps, {}> {
  public render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.header}>Ingredients</h1>
        <Settings
          activate={() => this.props.dispatch(activateSettings())}
          onSettingsChange={(veg: string) =>
            this.props.dispatch(changeVeg(veg))
          }
          settingsActive={this.props.settingsActive}
          veg={this.props.veg}
        />
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
    ingredients: state.searchReducer.ingredients,
    settingsActive: state.searchReducer.settingsActive,
    veg: state.searchReducer.veg
  };
};

export default connect(mapStateToProps)(SearchBar);
