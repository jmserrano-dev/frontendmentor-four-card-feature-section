import * as React from "react";

import { TitleStyled } from "./Title.styled";

interface ITitleProps {}

export const Title = ({ children }: React.PropsWithChildren<ITitleProps>) => {
  return <TitleStyled>{children}</TitleStyled>;
};
