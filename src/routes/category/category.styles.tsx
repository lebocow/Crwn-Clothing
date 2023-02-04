import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  @media only screen and (max-width: 64em) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
  }

  @media only screen and (max-width: 48em) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 31.625em) {
    grid-template-columns: 1fr;
  }
`;

export const CategoryTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
  text-transform: capitalize;
`;
