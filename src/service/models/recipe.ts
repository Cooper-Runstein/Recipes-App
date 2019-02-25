export type RecipeType = {
  id: string;
  name: string;
  ingredients: string[];
  website: string;
  link: string;
};

class Recipe {
  public id: RecipeType;
  public name: RecipeType;
  public ingredients: RecipeType;
  public website: RecipeType;
  public link: RecipeType;

  constructor(
    id: RecipeType,
    name: RecipeType,
    ingredients: RecipeType,
    website: RecipeType,
    link: RecipeType
  ) {
    this.id = id;
    this.name = name;
    this.ingredients = ingredients;
    this.website = website;
    this.link = link;
  }
}

export default Recipe;
