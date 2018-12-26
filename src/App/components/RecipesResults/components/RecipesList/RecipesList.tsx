import * as React from "react";

import RecipeType from "service/models/recipe";

import Recipe from "../Recipe";

type PropType = {
  recipes: RecipeType[];
};

const RecipesList = ({ recipes }: PropType) => {
  return (
    <div>
      {recipes.map((recipe, index) => {
        return <Recipe recipe={recipe} key={index} />;
      })}
    </div>
  );
};

export default RecipesList;
