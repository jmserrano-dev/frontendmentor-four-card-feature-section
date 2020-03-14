import styled from "styled-components";

interface ICardStyledProps {
  color: string;
}

export const CardStyled = styled.article<ICardStyledProps>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  max-height: 200px;

  padding: 25px;
  margin: 25px;

  border-radius: 5px;
  border-top: 5px solid ${props => props.color};

  box-shadow: 10px 25px 25px 5px rgba(204, 204, 204, 1);
`;
