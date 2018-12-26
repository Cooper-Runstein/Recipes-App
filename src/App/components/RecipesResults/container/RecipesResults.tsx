import * as React from "react";

import styles from "./RecipesResults.module.scss";

import Recipe from "service/models/recipe";

import RecipesList from "../components/RecipesList";

type RecipesResultsProps = {
  recipes: Recipe[];
  isUpdating: boolean;
};

class RecipesResults extends React.PureComponent<RecipesResultsProps> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className={styles.container}>
        <h1>Recipes</h1>
        <RecipesList recipes={this.props.recipes} />
      </div>
    );
  }
}

export default RecipesResults;
