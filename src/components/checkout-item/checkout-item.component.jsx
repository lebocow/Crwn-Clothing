import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, quantity, price } = item;

  const { addItemQuantity, substractItemQuantity, deleteItemFromCart } =
    useContext(CartContext);

  const incrementQuantityHandler = () => addItemQuantity(item);
  const decrementQuantityHandler = () => substractItemQuantity(item);
  const deleteCartItemHandler = () => deleteItemFromCart(item);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={decrementQuantityHandler}>
          &#10094;
        </div>
        <span className="value"> {quantity}</span>

        <div className="arrow" onClick={incrementQuantityHandler}>
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>
      <div className="remove-button" onClick={deleteCartItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
