import * as React from "react";
import { ThemeProvider } from "styled-components";

import { ThemeModel } from "./models";

import { Header } from "./components/header";
import { Cards } from "./components/cards";
import { Footer } from "./components/footer";

import { AppStyled, GlobalStyle } from "./App.styled";

export const theme: ThemeModel = {
  colors: {
    primary: {
      red: "hsl(0, 78%, 62%)",
      cyan: "hsl(180, 62%, 55%)",
      orange: "hsl(34, 97%, 64%)",
      blue: "hsl(212, 86%, 64%)"
    },
    neural: {
      veryDarkBlue: "hsl(234, 12%, 34%)",
      grayishBlue: "hsl(229, 6%, 66%)",
      veryLightGray: "hsl(0, 0%, 98%)"
    }
  }
};

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <AppStyled>
      <Header />
      <Cards />
      <Footer />
    </AppStyled>
  </ThemeProvider>
);
