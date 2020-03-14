import styled from "styled-components";
import { WeightType } from "../../../models/weight.type";

interface ITitleStyledProps {
  weight: WeightType;
  color: string;
}

export const TitleStyled = styled.h1<ITitleStyledProps>`
  margin: 0;
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
`;
