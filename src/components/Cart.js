import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () =>{

    const cartItems = useSelector((store) =>store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearCart());
    }
    return(
        <div className="text-center ">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="  w-6/12 m-auto mt-6 ">
                <button className="p-2 m-auto border border-black shadow-lg bg-yellow-300 rounded-xl flex justify-end" onClick={handleClearCart}>
                    Clear Cart
                </button>
                {cartItems.length===0 && <h1 className="m-auto pt-32 font-bold text-4xl">Your Cart is missing you !! <br /> Please Add items to your cart.</h1>}
                <ItemList items={cartItems} />
            </div>
        </div>
    );
};

export default Cart;