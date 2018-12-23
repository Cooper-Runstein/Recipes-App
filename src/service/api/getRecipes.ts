const getRecipes = (ingredients: string[]) => {
  console.log(ingredients);
  const ingredientsString = ingredients.join(",");
  return fetch(`http://localhost:8000/ingredients/${ingredientsString}`)
    .then(res => res.json())
    .then(json => {
      return json;
    });
};

export default getRecipes;
