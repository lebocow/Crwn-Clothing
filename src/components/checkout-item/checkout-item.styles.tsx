import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  @media only screen and (max-width: 31.626em) {
    font-size: 14px;
  }
`;

export const CheckoutImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const CheckoutContainerImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const CheckoutItemDetails = styled.span`
  width: 23%;
`;

export const CheckoutDetailsQuantity = styled(CheckoutItemDetails)`
  display: flex;
`;

export const CheckoutArrow = styled.div`
  cursor: pointer;
`;

export const CheckoutValue = styled.span`
  margin: 0 10px;
`;

export const CheckoutRemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
