/*
 src/actions/simpleAction.js
*/
import getRecipes from "service/api/getRecipes";
import Recipe from "service/models/recipe";

import { types } from "../reducers/simpleReducer";

export const searchFunc = (ingredients: string[]) => {
  const value = getRecipes(ingredients).then(recipes => {
    recipes = recipes.map((r: any) => {
      return new Recipe(r.recipeId, r.name, r.ingredients, r.website, r.link);
    });
    return (dispatch: any) =>
      dispatch({ type: types.SEARCH_WITH_INGREDIENTS, value });
  });
};

export const entryFunc = (value: string) => {
  return (dispatch: any) => dispatch({ type: types.UPDATE_ENTRY, value });
};

export const submitFunc = () => {
  return (dispatch: any) => {
    dispatch({ type: types.SUBMIT_INGREDIENT });
  };
};
