/*
 src/reducers/simpleReducer.js
*/

export enum types {
  SEARCH_WITH_INGREDIENTS,
  UPDATE_ENTRY,
  SUBMIT_INGREDIENT
}

export default (state = { ingredients: [], entry: "" }, action: any) => {
  switch (action.type) {
    case types.UPDATE_ENTRY:
      return {
        ...state,
        entry: action.value
      };
    case types.SEARCH_WITH_INGREDIENTS:
      return {
        ...state,
        recipes: action.value
      };
    case types.SUBMIT_INGREDIENT:
      const obj = {
        ...state,
        entry: "",
        ingredients: [...state.ingredients, state.entry]
      };
      console.log(obj);
      return obj;
    default:
      return state;
  }
};
