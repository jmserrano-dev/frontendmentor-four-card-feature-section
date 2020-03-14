import * as React from "react";
import { ThemeContext } from "styled-components";

import { CardsStyled } from "./Cards.styled";
import { Card } from "./card";
import { ThemeModel } from "../../models";

export const Cards = () => {
  const { colors } = React.useContext<ThemeModel>(ThemeContext);

  return (
    <CardsStyled>
      <div className="column">
        <Card
          title="Supervisor"
          subtitle="Monitors activity to identify project roadblocks"
          color={colors.primary.cyan}
          image={{
            path: "./asserts/images/icon-supervisor.svg",
            description: "Icon supervisor"
          }}
        />
      </div>
      <div className="column">
        <Card
          title="Team Builder"
          subtitle="Scans our talent network to create the optimal team for your project"
          color={colors.primary.red}
          image={{
            path: "./asserts/images/icon-team-builder.svg",
            description: "Icon team builder"
          }}
        />
        <Card
          title="Karma"
          subtitle="Regularly evaluates our talent to ensure quality"
          color={colors.primary.orange}
          image={{
            path: "./asserts/images/icon-karma.svg",
            description: "Icon karma"
          }}
        />
      </div>
      <div className="column">
        <Card
          title="Calculator"
          subtitle="Uses data from past projects to provide better delivery estimates"
          color={colors.primary.blue}
          image={{
            path: "./asserts/images/icon-calculator.svg",
            description: "Icon calculator"
          }}
        />
      </div>
    </CardsStyled>
  );
};
