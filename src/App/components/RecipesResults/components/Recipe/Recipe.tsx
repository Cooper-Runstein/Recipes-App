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
  ingredients: any;
};

const Recipe = ({ recipe, loading, dispatch, ingredients }: PropTypes) => {
  const numberOfIngredients = recipe.ingredients.filter(i =>
    ingredients.includes(i)
  );
  return (
    <>
      {!loading && (
        <Card
          title={recipe.name}
          text={
            <>
              <IngredientsList ingredients={recipe.ingredients} />
              <p>
                Number of ingredients you have: {numberOfIngredients.length} of{" "}
                {recipe.ingredients.length}
              </p>
            </>
          }
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

const mapStateToProps = (state: any) => {
  return {
    ingredients: state.searchReducer.ingredients
  };
};
export default connect(mapStateToProps)(Recipe);
