import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

export const CartItemImage = styled.img`
  width: 35%;
`;

export const CartItemDetails = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const CartItemDetailsName = styled.span`
  font-size: 16px;
`;

export const CartItemDetailsPrice = styled.span``;
