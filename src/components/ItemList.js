import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from '../utils/cartSlice';
import { Vegan } from "lucide-react";
import { GiChickenLeg } from "react-icons/gi";

const ItemList = ({ items, isCartPage = false }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

   console.log(items);
  

  return (
    <div>
      {items.map((item) => (
        <div key={item?.card?.info?.id} className="p-2 mt-12 border-gray-800 bg-yellow-100 shadow-2xl rounded-2xl border-b-2 text-left">
          <span className="text-sm">{item?.card?.info?.isVeg === 1 ? <Vegan className="text-green-500" /> : <GiChickenLeg className="text-orange-700" />}</span>
          <div className="p-2 flex justify-between">
            <span className="font-bold text-left ml-0">
              {item?.card?.info?.name}
              <span className="p-2 flex">
                ₹{item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}
              </span>
              {isCartPage && item.quantity > 1 && (
                <span className="ml-2 text-sm font-normal">x{item.quantity}</span>
              )}
            </span>
            <span className="relative border-b-4 border-r-4 rounded-b-xl rounded-r-xl border-b-yellow-500 border-r-yellow-500">
              <img 
                src={CDN_URL + item?.card?.info?.imageId} 
                className="w-32 h-24 rounded-lg p-0 shadow-2xl" 
                alt={item?.card?.info?.name}
              />
              {isCartPage ? (
                <button
                  className="absolute bottom-0 right-0 p-2 bg-red-500 text-white text-center shadow-xl rounded-lg"
                  onClick={() => handleRemoveItem(item.card.info.id)}
                >
                  Remove
                </button>
              ) : (
                <button
                  className="absolute bottom-0 right-0 p-2 bg-green-500 text-white text-center shadow-xl rounded-lg"
                  onClick={() => handleAddItem(item)}
                >
                  Add
                </button>
              )}
            </span>
          </div>
          <div>
            <p className="text-sm font-serif text-gray-600 font-light mt-2">{item?.card?.info?.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
