import * as React from "react";

import RecipeType from "service/models/recipe";

import Recipe from "../Recipe";

import styles from "./RecipesList.module.scss";

// import { MoonLoader } from "react-spinners";

type PropType = {
  recipes: RecipeType[];
  loading: boolean;
};

const RecipesList = ({ recipes, loading }: PropType) => {
  return (
    <div className={styles.container}>
      {recipes.map((recipe, index) => {
        return <Recipe recipe={recipe as any} key={index} loading={loading} />;
      })}
    </div>
  );
};

export default RecipesList;
