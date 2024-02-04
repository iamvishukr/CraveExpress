import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () =>{

    const cartItems = useSelector((store) =>store.cart.items);
    console.log(cartItems);
    return(
        <div className="text-center  p-4 m-4 ">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div>
                <ItemList items={cartItems} />
            </div>
        </div>
    );
};

export default Cart;