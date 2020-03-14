import styled from "styled-components";

export const CardsStyled = styled.div`
  @media (min-width: 375px) {
    display: block;
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;

    .column {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;

      justify-content: center;
    }
  }
`;
