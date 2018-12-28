import { ActionTypes } from "./searchActions";

export default (
  state = {
    entry: "",
    ignoredRecipes: [],
    ingredients: [],
    isUpdating: false,
    recipes: [],
    status: true
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.UPDATE_ENTRY:
      return {
        ...state,
        entry: action.value
      };
    case ActionTypes.SUBMIT_INGREDIENT:
      return {
        ...state,
        entry: "",
        ingredients: [...state.ingredients, state.entry],
        isUpdating: true
      };
    case ActionTypes.SEARCH_WITH_INGREDIENTS:
      return {
        ...state,
        isUpdating: false,
        recipes:
          action.value.filter(
            recipe => !state.ignoredRecipes.includes(recipe.id)
          ) || state.recipes,
        status: action.status
      };
    case ActionTypes.RESET_STATUS:
      return {
        ...state,
        ingredients: state.ingredients.slice(0, state.ingredients.length - 1),
        isUpdating: false,
        status: true
      };
    case ActionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter(i => i !== action.value),
        isUpdating: true
      };
    case ActionTypes.IGNORE_RECIPE:
      return {
        ...state,
        ignoredRecipes: [...state.ignoredRecipes, action.id],
        recipes: state.recipes.filter(recipe => recipe.id !== action.id)
      };
    default:
      return state;
  }
};
