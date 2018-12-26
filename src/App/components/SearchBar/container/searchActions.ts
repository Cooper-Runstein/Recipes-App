import getRecipes from "service/api/getRecipes";
import Recipe from "service/models/recipe";

export enum ActionTypes {
  SEARCH_WITH_INGREDIENTS,
  UPDATE_ENTRY,
  SUBMIT_INGREDIENT
}

export const searchFunc = (ingredients: string[]) => {
  const value = getRecipes(ingredients).then(recipes => {
    recipes = recipes.map((r: any) => {
      return new Recipe(r.recipeId, r.name, r.ingredients, r.website, r.link);
    });
    return (dispatch: any) =>
      dispatch({ type: ActionTypes.SEARCH_WITH_INGREDIENTS, value });
  });
};

export const entryFunc = (value: string) => {
  return (dispatch: any) => dispatch({ type: ActionTypes.UPDATE_ENTRY, value });
};

export const submitFunc = () => {
  return (dispatch: any) => {
    dispatch({ type: ActionTypes.SUBMIT_INGREDIENT });
  };
};
