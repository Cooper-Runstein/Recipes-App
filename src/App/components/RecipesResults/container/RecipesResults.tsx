import * as React from "react";

import styles from "./RecipesResults.module.scss";

import Recipe from "service/models/recipe";

import Alert, { AlertColor } from "../../common/Alert";
import RecipesList from "../components/RecipesList";

type RecipesResultsProps = {
  recipes: Recipe[];
  isUpdating: boolean;
  status: boolean;
  normalizeStatus: () => void;
};

class RecipesResults extends React.PureComponent<RecipesResultsProps> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className={styles.container}>
        <h1>Recipes</h1>
        {this.props.status && this.props.recipes.length > 0 && (
          <RecipesList recipes={this.props.recipes} />
        )}

        {!this.props.status && (
          <Alert
            text={"Oh No! An error occured, we'll remove that last ingredient!"}
            color={AlertColor.DANGER}
            exitButton={true}
            buttonText={"Okay!"}
            buttonClick={() => this.props.normalizeStatus()}
          />
        )}
      </div>
    );
  }
}

export default RecipesResults;
