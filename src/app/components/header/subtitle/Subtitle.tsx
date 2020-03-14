import * as React from "react";

import { SubtitleStyled } from "./Subtitle.styled";
import { WeightType } from "../../../models/weight.type";

interface ISubtitleProps {
  weight: WeightType;
  color: string;
}

export const Subtitle = ({
  weight,
  color,
  children
}: React.PropsWithChildren<ISubtitleProps>) => {
  return (
    <SubtitleStyled weight={weight} color={color}>
      {children}
    </SubtitleStyled>
  );
};
