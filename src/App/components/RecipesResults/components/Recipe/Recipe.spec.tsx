import * as React from "react";

import { shallow } from "enzyme";

import Card from "../../../common/Card";
import Recipe from "./Recipe";

import mockRecipes from "../../../../../mocks/Recipes.mock";

describe("Recipes", () => {
  test("renders a single Card", () => {
    const wrapper = shallow(<Recipe loading={false} recipe={mockRecipes[0]} />);
    const card = wrapper.find(Card);
    expect(card.length).toBe(1);
  });
});
