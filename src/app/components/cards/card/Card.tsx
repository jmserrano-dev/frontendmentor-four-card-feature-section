import * as React from "react";

import { Title } from "./title";
import { Description } from "./description";

import { Icon } from "./icon";

import { CardStyled } from "./Card.styled";

interface ICardProps {
  title: string;
  subtitle: string;
  color: string;
  image: { path: string; description: string };
}

export const Card = (props: ICardProps) => {
  return (
    <CardStyled color={props.color}>
      <Title>{props.title}</Title>
      <Description>{props.subtitle}</Description>
      <Icon {...props.image} />
    </CardStyled>
  );
};
