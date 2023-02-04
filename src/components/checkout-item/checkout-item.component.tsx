import { useDispatch, useSelector } from "react-redux";

import {
  addItemToCart,
  deleteItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";
import { selectCart } from "../../store/cart/cart.selector";

import {
  CheckoutItemContainer,
  CheckoutImageContainer,
  CheckoutContainerImage,
  CheckoutItemDetails,
  CheckoutDetailsQuantity,
  CheckoutValue,
  CheckoutRemoveButton,
  CheckoutArrow,
} from "./checkout-item.styles";

import { CartItem } from "../../store/cart/cart.types";
import { FC, memo } from "react";

type CheckoutItemProps = {
  item: CartItem;
};

const CheckoutItem: FC<CheckoutItemProps> = memo(({ item }) => {
  const { name, imageUrl, quantity, price } = item;

  const dispatch = useDispatch();

  const { cartItems } = useSelector(selectCart);

  const incrementQuantityHandler = () =>
    dispatch(addItemToCart(cartItems, item));
  const decrementQuantityHandler = () =>
    dispatch(deleteItemFromCart(cartItems, item));
  const deleteCartItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, item));

  return (
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <CheckoutContainerImage src={imageUrl} alt={name} />
      </CheckoutImageContainer>
      <CheckoutItemDetails>{name}</CheckoutItemDetails>

      <CheckoutDetailsQuantity>
        <CheckoutArrow onClick={decrementQuantityHandler}>
          &#10094;
        </CheckoutArrow>
        <CheckoutValue>{quantity}</CheckoutValue>

        <CheckoutArrow onClick={incrementQuantityHandler}>
          &#10095;
        </CheckoutArrow>
      </CheckoutDetailsQuantity>

      <CheckoutItemDetails>{price}</CheckoutItemDetails>
      <CheckoutRemoveButton onClick={deleteCartItemHandler}>
        &#10005;
      </CheckoutRemoveButton>
    </CheckoutItemContainer>
  );
});

export default CheckoutItem;
