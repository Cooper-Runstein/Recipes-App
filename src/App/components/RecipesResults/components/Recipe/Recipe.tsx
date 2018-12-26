import * as React from "react";
import IngredientsList from "../IngredientsList";

import RecipeType from "service/models/recipe";

type PropTypes = {
  recipe: RecipeType;
};

const Recipe = ({ recipe }: PropTypes) => {
  return (
    <div>
      <h3>{recipe.name}</h3>

      <IngredientsList ingredients={recipe.ingredients} />

      <h4>{recipe.website}</h4>
      <h4>{recipe.link}</h4>
    </div>
  );
};

export default Recipe;
