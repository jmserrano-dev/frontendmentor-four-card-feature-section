import * as React from "react";

import { DescriptionStyled } from "./Description.styled";

interface IDescriptionProps {}

export const Description = ({
  children
}: React.PropsWithChildren<IDescriptionProps>) => {
  return <DescriptionStyled>{children}</DescriptionStyled>;
};
