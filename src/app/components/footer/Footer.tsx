import * as React from "react";

import { FooterStyled } from "./Footer.styled";

export const Footer = () => {
  return (
    <FooterStyled>
      <p>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          rel="noopener noreferrer"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="/">José Manuel Serrano Mármol</a>.
      </p>
    </FooterStyled>
  );
};
