import * as React from "react";

import { IconStyled } from "./Icon.styled";

interface IIconProps {
  path: string;
  description: string;
}

export const Icon = ({ path, description }: IIconProps) => {
  return (
    <IconStyled>
      <img src={path} alt={description} />
    </IconStyled>
  );
};
