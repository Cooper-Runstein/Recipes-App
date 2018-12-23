import * as React from "react";

import styles from "./RecipesResults.module.scss";

import { RecipeType } from "service/models/recipe";

type RecipesResultsType = {
  recipes: RecipeType[];
};

const RecipesResults = ({ recipes }: RecipesResultsType) => {
  return (
    <div className={styles.container}>
      <h1>Recipes</h1>
      {recipes.map((recipe, index) => {
        return (
          <div key={index} className={styles.recipe}>
            <h3>{recipe.name}</h3>
            <ul>
              {recipe.ingredients.map((ingredient, idx) => {
                return <li key={idx}>{ingredient}</li>;
              })}
            </ul>
            <h4>{recipe.website}</h4>
            <h4>{recipe.link}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default RecipesResults;
