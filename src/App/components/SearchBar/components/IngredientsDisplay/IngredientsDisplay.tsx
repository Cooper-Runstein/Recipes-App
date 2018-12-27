import * as React from "react";

import Card from "App/components/common/Card";

import styles from "./IngredientsDisplay.module.scss";

type IngredientsDisplayProps = {
  ingredients: string[];
};

const IngredientsDisplay = ({ ingredients }: IngredientsDisplayProps) => {
  return (
    <div className={styles.container}>
      {ingredients.map((ingredient, index) => (
        <Card
          key={index}
          text={ingredient}
          buttons={[
            {
              color: "danger",
              onClick: () => null,
              text: "remove"
            }
          ]}
        />
      ))}
    </div>
  );
};

export default IngredientsDisplay;
