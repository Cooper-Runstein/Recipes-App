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
  loading: boolean;
};

class RecipesResults extends React.PureComponent<RecipesResultsProps> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Recipes</h1>
          {this.props.recipes.length > 0 && (
            <h3>Results: {this.props.recipes.length}</h3>
          )}
        </div>
        {this.props.status && (
          <RecipesList
            recipes={this.props.recipes}
            loading={this.props.loading}
          />
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
