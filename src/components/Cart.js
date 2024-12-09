import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { ShoppingCart } from "lucide-react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + (item.card.info.inStock || 0), 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice =
        item?.card?.info?.price || item.card.info.defaultPrice || 0;
      return total + (itemPrice / 100) * (item.quantity || 0);
    }, 0);
  };

  console.log("Cart Items:", cartItems);
  console.log("Total Items:", getTotalItems());
  console.log("Total Price:", getTotalPrice());

  return (
    <div className="text-center bg-gray-900 min-h-screen pt-24">
      <h1 className="text-4xl font-bold text-yellow-500">
        Cart
        <ShoppingCart
          size={80}
          className="flex justify-center items-center m-auto"
        />
      </h1>
      <div className="w-6/12 m-auto mt-6">
        {cartItems.length > 0 && (
          <div className="flex justify-between items-center mb-4">
            <span className="text-white">Total Items: {getTotalItems()}</span>
            <span className="text-white">
              Total Price: ₹{getTotalPrice().toFixed(2)}
            </span>
            <button
              className="p-2 border border-gray-500 font-semibold shadow-lg bg-red-500 text-white rounded-xl"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
        )}
        {cartItems.length === 0 ? (
          <h1 className="m-auto pt-32 font-bold text-4xl text-gray-400">
            Your Cart is missing you !! <br /> Please Add items to your cart.
          </h1>
        ) : (
          <ItemList items={cartItems} isCartPage={true} />
        )}
      </div>
    </div>
  );
};

export default Cart;
