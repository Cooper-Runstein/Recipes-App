import * as React from "react";

import styles from "./SearchBar.module.scss";

import { connect } from "react-redux";

import InputBox from "./InputBox";

import {
  entryFunc,
  // searchFunc,
  submitFunc
} from "../../../service/actions/simpleAction";

export type SearchBarProps = {
  color: string;
  entry: string;
  dispatch: (arg: any) => void;
};

class SearchBar extends React.Component<SearchBarProps> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <>
        <h1 className={styles[this.props.color]}>Hello, Search For Chicken</h1>
        <InputBox
          onChange={(e: string) => this.props.dispatch(entryFunc(e))}
          onClick={() => this.props.dispatch(submitFunc())}
          entry={this.props.entry}
        />
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  console.log("MAP");
  console.log(state);
  return { entry: state.simpleReducer.entry };
};

export default connect(mapStateToProps)(SearchBar);
