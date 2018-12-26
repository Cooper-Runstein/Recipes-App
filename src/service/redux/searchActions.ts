import getRecipes from "service/api/getRecipes";
import Recipe from "service/models/recipe";

export enum ActionTypes {
  UPDATE_ENTRY,
  SUBMIT_INGREDIENT,
  SEARCH_WITH_INGREDIENTS
}

export const entryFunc = (value: string) => {
  return (dispatch: any) => dispatch({ type: ActionTypes.UPDATE_ENTRY, value });
};

export const submitFunc = () => {
  return (dispatch: any) => {
    dispatch({ type: ActionTypes.SUBMIT_INGREDIENT });
  };
};

export const searchFunc = (ingredients: string[]) => {
  return (dispatch: any) =>
    getRecipes(ingredients).then(recipes => {
      recipes = recipes.map((r: any) => {
        return new Recipe(r.recipeId, r.name, r.ingredients, r.website, r.link);
      });
      dispatch({ type: ActionTypes.SEARCH_WITH_INGREDIENTS, value: recipes });
    });
};
