import * as React from "react";

import { TitleStyled } from "./Title.styled";
import { WeightType } from "../../../models/weight.type";

interface ITitleProps {
  weight: WeightType;
  color: string;
}

export const Title = ({
  weight,
  color,
  children
}: React.PropsWithChildren<ITitleProps>) => {
  return (
    <TitleStyled weight={weight} color={color}>
      {children}
    </TitleStyled>
  );
};
