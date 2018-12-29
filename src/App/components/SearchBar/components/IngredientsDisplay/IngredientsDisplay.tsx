import * as React from "react";

import Card, { ClassLayout } from "App/components/common/Card";

import styles from "./IngredientsDisplay.module.scss";

type IngredientsDisplayProps = {
  ingredients: string[];
  removeFunction: (i: string) => any;
};

const IngredientsDisplay = ({
  ingredients,
  removeFunction
}: IngredientsDisplayProps) => {
  return (
    <div className={styles.container}>
      {ingredients.map((ingredient, index) => (
        <Card
          classLayout={ClassLayout.SINGLE_ROW}
          key={index}
          text={ingredient}
          buttons={[
            {
              color: "danger",
              onClick: () => removeFunction(ingredient),
              text: "remove"
            }
          ]}
        />
      ))}
    </div>
  );
};

export default IngredientsDisplay;
