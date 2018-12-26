import { ActionTypes } from "./searchActions";

export default (
  state = {
    entry: "",
    ingredients: [],
    isUpdating: false,
    recipes: [],
    status: true
  },
  action: any
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
        recipes: action.value,
        status: action.status
      };
    default:
      return state;
  }
};
