import * as React from "react";
import IngredientsList from "../IngredientsList";

import Card from "../../../common/Card";

import { MoonLoader } from "react-spinners";

type RecipeType = {
  name: string;
  ingredients: string[];
  website: string;
  link: string;
};

type PropTypes = {
  recipe: RecipeType;
  loading: boolean;
};

const Recipe = ({ recipe, loading }: PropTypes) => {
  return (
    <>
      {!loading && (
        <Card
          title={recipe.name}
          text={<IngredientsList ingredients={recipe.ingredients} />}
          buttons={[
            {
              onClick: () => {
                window.open(recipe.link, "_blank");
              },
              text: recipe.website
            }
          ]}
        />
      )}

      {loading && (
        <Card
          title={""}
          text={
            <MoonLoader
              sizeUnit={"px"}
              size={75}
              color={"#123abc"}
              loading={true}
            />
          }
        />
      )}
    </>
  );
};

export default Recipe;
