import * as React from "react";

type PropType = {
  ingredients: any;
};

const IngredientsList = ({ ingredients }: PropType) => {
  return (
    <ul>
      {ingredients.map((ingredient: string, idx: number) => {
        return <li key={idx}>{ingredient}</li>;
      })}
    </ul>
  );
};

export default IngredientsList;
