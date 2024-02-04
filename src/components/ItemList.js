import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import {addItem} from '../utils/cartSlice'
const ItemList = ({items})=>{
    console.log(items)
    const dispatch = useDispatch();
    const handleAddItem = () =>{
        dispatch(addItem(items));
    };
    return(
        <div>
            {items.map((item)=>(
                
                 <div key={item?.card?.info?.id} className="p-2 m-2 border-gray-200 border-b-2 text-left">
                    <span className="text-xs">{item?.card?.info?.isVeg===1 ? '🥦' :'🍗'}</span>
                    <div className="p-2 flex justify-between" >
                        
                        <span className="font-bold text-left ml-0">
                            {item?.card?.info?.name}
                            <span className="p-2 flex">₹{item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</span>
                        </span>
                    
                       <span className="">
                             <img src={CDN_URL + item?.card?.info?.imageId} className="w-32 h-24 rounded-lg p-0 -translate-y-1/3 shadow-2xl" />      
                             <button className=" p-2 text-green-600 w-2/3 h-8 text-center bg-white shadow-xl rounded-lg -translate-y-12 translate-x-5" 
                             onClick={()=>handleAddItem(item)}>Add </button>
                       </span> 
                    </div>

                    <div>
                    <p className="text-xs text-gray-600 font-light -translate-y-8">{item?.card?.info?.description}</p>
                    </div>
                    
                </div>
            ))}
        </div>
    );
};
export default ItemList;