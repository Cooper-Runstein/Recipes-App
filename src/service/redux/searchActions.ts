import getRecipes from "service/api/getRecipes";
import Recipe from "service/models/recipe";

export enum ActionTypes {
  UPDATE_ENTRY,
  SUBMIT_INGREDIENT,
  SEARCH_WITH_INGREDIENTS,
  RESET_STATUS,
  REMOVE_INGREDIENT,
  IGNORE_RECIPE,
  CHANGE_VEG,
  ACTIVATE_SETTINGS
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
  return (dispatch: any, getState: any) =>
    getRecipes(ingredients)
      .then(recipes => {
        recipes = recipes.map((r: any) => {
          return new Recipe(
            r.recipeId,
            r.name,
            r.ingredients,
            r.sourceWebsite,
            r.link
          );
        });
        recipes = recipes.filter(
          (r: any) => !getState().searchReducer.ignoredRecipes.includes(r.id)
        );
        dispatch({
          status: true,
          type: ActionTypes.SEARCH_WITH_INGREDIENTS,
          value: recipes
        });
      })
      .catch(() =>
        dispatch({
          status: false,
          type: ActionTypes.SEARCH_WITH_INGREDIENTS
        })
      );
};

export const normalizeStatus = () => {
  return (dispatch: any) => {
    dispatch({ type: ActionTypes.RESET_STATUS });
  };
};

export const removeIngredient = (value: string) => {
  return (dispatch: any) => {
    dispatch({ type: ActionTypes.REMOVE_INGREDIENT, value });
  };
};

export const ignoreRecipe = (id: any) => {
  return (dispatch: any) => {
    dispatch({ type: ActionTypes.IGNORE_RECIPE, id });
  };
};

export const changeVeg = (val: string) => {
  console.log(val);
  return (dispatch: any) => {
    dispatch({ type: ActionTypes.CHANGE_VEG, value: val });
  };
};

export const activateSettings = () => {
  return (dispatch: any) => {
    dispatch({ type: ActionTypes.ACTIVATE_SETTINGS });
  };
};
