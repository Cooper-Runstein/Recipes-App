import * as React from "react";
import IngredientsList from "../IngredientsList";

import { connect } from "react-redux";

import Card from "../../../common/Card";

import { MoonLoader } from "react-spinners";

import { ignoreRecipe } from "service/redux/searchActions";

type RecipeType = {
  id: any;
  name: string;
  ingredients: string[];
  website: string;
  link: string;
};

type PropTypes = {
  recipe: RecipeType;
  loading: boolean;
  dispatch: any;
};

const Recipe = ({ recipe, loading, dispatch }: PropTypes) => {
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
            },
            {
              color: "danger",
              onClick: () => {
                dispatch(ignoreRecipe(recipe.id));
                console.log(recipe.id);
              },
              text: "Not Interested"
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

export default connect()(Recipe);
