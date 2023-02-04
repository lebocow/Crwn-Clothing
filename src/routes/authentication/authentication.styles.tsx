import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 80vw;
  justify-content: space-around;
  margin: 30px auto;

  @media only screen and (max-width: 64em) {
    flex-direction: column;
  }
`;
