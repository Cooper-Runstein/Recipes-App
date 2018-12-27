import * as React from "react";

import { shallow } from "enzyme";

import Recipe from "../Recipe";

import RecipesList from "./RecipesList";

import mockRecipes from "../../../../../mocks/Recipes.mock";

describe("RecipesList", () => {
  test("It displays all recipes", () => {
    const recipes = [mockRecipes[0]];
    const wrapper = shallow(
      <RecipesList recipes={recipes as any} loading={false} />
    );

    expect(wrapper.find(Recipe).length).toBe(1);
  });
});
