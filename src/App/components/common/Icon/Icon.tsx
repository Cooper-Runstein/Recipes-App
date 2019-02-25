import * as React from "react";

import FeatherIcon from "feather-icons-react";

export enum IconType {
  SETTINGS = "settings"
}
type IconProps = {
  iconType: IconType;
  color?: string;
};

const Icon = ({ iconType, color }: IconProps) => {
  return <FeatherIcon icon={iconType} color={color} />;
};

export default Icon;
