import * as React from "react";
import {
  Button,
  Card as BSCard,
  CardImg,
  CardSubtitle,
  CardTitle
} from "reactstrap";

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
        {title && <CardTitle>{title}</CardTitle>}
        {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
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
