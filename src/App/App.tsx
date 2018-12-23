import * as React from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

import Recipe, { RecipeType } from "service/models/recipe";

import getRecipes from "service/api/getRecipes";

type StateType = {
  recipes: RecipeType[];
  entry: string;
  ingredients: string[];
};

class App extends React.Component {
  public state: StateType = {
    entry: "",
    ingredients: [],
    recipes: []
  };

  public searchFunc = (ingredients: string[]) => {
    getRecipes(ingredients).then(recipes => {
      recipes = recipes.map((r: any) => {
        return new Recipe(r.recipeId, r.name, r.ingredients, r.website, r.link);
      });
      this.setState({ ...this.state, recipes });
    });
  };

  public entryFunc = (value: string) => {
    this.setState({ ...this.state, entry: value });
  };

  public submitFunc = () => {
    if (this.state.entry !== "") {
      this.setState(
        {
          ...this.state,
          entry: "",
          ingredients: [...this.state.ingredients, this.state.entry]
        },
        () => this.searchFunc(this.state.ingredients)
      );
    }
  };

  public render() {
    return (
      <>
        <Header />
        <h1>Food App Thingy</h1>
        <SearchBar
          submitFunc={this.submitFunc}
          entryFunc={this.entryFunc}
          textEntryValue={this.state.entry}
        />
      </>
    );
  }
}

export default App;
