import * as React from "react";
import { Button, Card as BSCard, CardImg } from "reactstrap";

import styles from "./Card.module.scss";

export enum ClassLayout {
  SINGLE_ROW = "singleRow",
  DEFAULT = "default"
}

type CardImage = {
  width: number;
  src: string;
  alt: string;
};

type ButtonType = {
  onClick: () => void;
  text: string;
  color?: string;
};

type CardProps = {
  classLayout?: ClassLayout;
  img?: CardImage;
  text: React.ReactNode;
  title?: string;
  subtitle?: string;
  buttons?: ButtonType[];
};

const Card = ({
  img,
  text,
  title,
  subtitle,
  buttons,
  classLayout = ClassLayout.DEFAULT
}: CardProps) => {
  return (
    <BSCard className="Card">
      {img && <CardImg width={`${img.width}%`} src={img.src} alt={img.alt} />}
      <div className={styles[classLayout]}>
        {title && <h3>{title}</h3>}
        {subtitle && <h4>{subtitle}</h4>}
        <div>{text}</div>
        {buttons && (
          <div className={styles.buttonsContainer}>
            {buttons.map((button, index) => (
              <Button key={index} onClick={button.onClick} color={button.color}>
                {button.text}
              </Button>
            ))}
          </div>
        )}
      </div>
    </BSCard>
  );
};

export default Card;
