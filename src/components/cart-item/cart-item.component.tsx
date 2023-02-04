import { FC, memo } from "react";
import {
  CartItemContainer,
  CartItemImage,
  CartItemDetails,
  CartItemDetailsName,
  CartItemDetailsPrice,
} from "./cart-item.styles";

import { CartItem as TCartItem } from "../../store/cart/cart.types.js";

type CartItemProps = {
  cartItem: TCartItem;
};

const CartItem: FC<CartItemProps> = memo(
  ({ cartItem: { name, imageUrl, price, quantity } }) => {
    return (
      <CartItemContainer>
        <CartItemImage src={imageUrl} alt={name} />
        <CartItemDetails>
          <CartItemDetailsName>{name}</CartItemDetailsName>
          <CartItemDetailsPrice>
            {quantity} x ${price}
          </CartItemDetailsPrice>
        </CartItemDetails>
      </CartItemContainer>
    );
  }
);

export default CartItem;
