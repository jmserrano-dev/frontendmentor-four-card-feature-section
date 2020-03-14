import * as React from "react";
import { ThemeContext } from "styled-components";

import { ThemeModel } from "../../models";

import { Title } from "./title";
import { Subtitle } from "./subtitle";

import { HeaderStyled } from "./Header.styled";

export const Header = () => {
  const { colors } = React.useContext<ThemeModel>(ThemeContext);

  return (
    <HeaderStyled>
      <Title weight="200" color={colors.neural.grayishBlue}>
        Reliable, efficient delivery
      </Title>
      <Title weight="600" color={colors.neural.veryDarkBlue}>
        Powered by Technology
      </Title>
      <Subtitle weight="400" color={colors.neural.grayishBlue}>
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </Subtitle>
    </HeaderStyled>
  );
};
