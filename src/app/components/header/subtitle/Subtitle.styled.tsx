import styled from "styled-components";
import { WeightType } from "../../../models/weight.type";

interface ISubtitleStyledProps {
  weight: WeightType;
  color: string;
}

export const SubtitleStyled = styled.h3<ISubtitleStyledProps>`
  margin: 0;
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
`;
