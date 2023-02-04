import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 31.625em) {
    height: 150px;
  }
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;

  @media only screen and (max-width: 33.5em) {
    min-width: 250px;
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;

  @media only screen and (max-width: 33.5em) {
    margin: 25px auto 0;
  }
`;
