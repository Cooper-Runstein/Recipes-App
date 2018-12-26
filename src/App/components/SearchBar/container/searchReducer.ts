import { ActionTypes } from "./searchActions";

export default (state = { ingredients: [], entry: "" }, action: any) => {
  switch (action.type) {
    case ActionTypes.UPDATE_ENTRY:
      return {
        ...state,
        entry: action.value
      };
    case ActionTypes.SEARCH_WITH_INGREDIENTS:
      return {
        ...state,
        recipes: action.value
      };
    case ActionTypes.SUBMIT_INGREDIENT:
      return {
        ...state,
        entry: "",
        ingredients: [...state.ingredients, state.entry]
      };
    default:
      return state;
  }
};
