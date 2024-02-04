import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setIndex}) => {

  // const [showItems, setShowItems] = useState(false);            --- Uncontrolled-component (we are not rely  on parent div)
   const handleClick =()=>{
  //   setShowItems(!showItems);
   //    setShowIndex(!showIndex);
          setIndex();
   }
    return (
        <div className="cursor-pointer" >
            <div className=" mt-4 mb-4  p-4 m-auto w-7/12 border border-gray-200 bg-gray-50" >
              <div className="flex justify-between ">
              <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span onClick={handleClick}>{'🔽'}</span>
              </div>
                {showItems && <ItemList items= {data.itemCards} />}
            </div>
        </div>
    )
}

export default RestaurantCategory;