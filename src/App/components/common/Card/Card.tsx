import * as React from "react";
import {
  Button,
  Card as BSCard,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle
} from "reactstrap";

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
  img?: CardImage;
  text: React.ReactNode;
  title?: string;
  subtitle?: string;
  buttons?: ButtonType[];
};

const Card = ({ img, text, title, subtitle, buttons }: CardProps) => {
  return (
    <BSCard className="Card">
      {img && <CardImg width={`${img.width}%`} src={img.src} alt={img.alt} />}
      <CardBody>
        {title && <CardTitle>{title}</CardTitle>}
        {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
        <CardText>{text}</CardText>
        {buttons &&
          buttons.map((button, index) => (
            <Button key={index} onClick={button.onClick} color={button.color}>
              {button.text}
            </Button>
          ))}
      </CardBody>
    </BSCard>
  );
};

export default Card;
