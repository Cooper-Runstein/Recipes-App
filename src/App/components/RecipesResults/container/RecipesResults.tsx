import * as React from "react";

import styles from "./RecipesResults.module.scss";

import Recipe from "service/models/recipe";

import Modal from "../../common/Modal";
import RecipesList from "../components/RecipesList";

type RecipesResultsProps = {
  recipes: Recipe[];
  isUpdating: boolean;
  status: boolean;
};

class RecipesResults extends React.PureComponent<RecipesResultsProps> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className={styles.container}>
        <h1>Recipes</h1>
        {this.props.status && <RecipesList recipes={this.props.recipes} />}
        {!this.props.status && <Modal isOpen={true} text={"error"} />}
      </div>
    );
  }
}

export default RecipesResults;
