import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
  }

  a {
    text-decoration: none;
  }
`;

export const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
