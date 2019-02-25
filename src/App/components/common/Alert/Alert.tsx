import * as React from "react";

import { Alert as BSAlert, Button as BSButton } from "reactstrap";

export enum AlertColor {
  PRIMARY = "primary",
  DANGER = "danger"
}

type AlertProps = {
  buttonClick?: () => void;
  buttonText?: string;
  color: AlertColor;
  isOpen?: boolean;
  text: string;
  exitButton?: boolean;
};

const Alert = ({
  color,
  text,
  exitButton = false,
  buttonText,
  buttonClick
}: AlertProps) => (
  <BSAlert color={color}>
    {text}{" "}
    {exitButton && (
      <BSButton color={"primary"} onClick={buttonClick}>
        {buttonText}
      </BSButton>
    )}
  </BSAlert>
);

export default Alert;
{
  /* <Alert color="primary">
        This is a primary alert — check it out!
      </Alert>
      <Alert color="secondary">
        This is a secondary alert — check it out!
      </Alert>
      <Alert color="success">
        This is a success alert — check it out!
      </Alert>
      <Alert color="danger">
        This is a danger alert — check it out!
      </Alert>
      <Alert color="warning">
        This is a warning alert — check it out!
      </Alert>
      <Alert color="info">
        This is a info alert — check it out!
      </Alert>
      <Alert color="light">
        This is a light alert — check it out!
      </Alert>
      <Alert color="dark">
        This is a dark alert — check it out!
      </Alert> */
}
