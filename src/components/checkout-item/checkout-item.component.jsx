import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  CheckoutItemContainer,
  CheckoutImageContainer,
  CheckoutContainerImage,
  CheckoutItemDetails,
  CheckoutDetailsQuantity,
  CheckoutValue,
  CheckoutRemoveButton,
  CheckoutArrow,
} from "./checkout-item.styles.jsx";

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, quantity, price } = item;

  const { addItemQuantity, substractItemQuantity, deleteItemFromCart } =
    useContext(CartContext);

  const incrementQuantityHandler = () => addItemQuantity(item);
  const decrementQuantityHandler = () => substractItemQuantity(item);
  const deleteCartItemHandler = () => deleteItemFromCart(item);

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
};

export default CheckoutItem;
