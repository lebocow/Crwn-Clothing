import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const CategoryPreviewTitle = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const CategoryPreviewProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

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
