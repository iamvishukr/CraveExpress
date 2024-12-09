import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestarurantCategory";
import Shimmer from "./ShimmerCards";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [id, setId] = useState(0);
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  // Find the correct cards array that contains restaurant info
  const restaurantInfo = resInfo?.cards?.find(
    card => card?.card?.card?.info
  )?.card?.card?.info;

 // console.log(restaurantInfo)
  // Find the correct cards array that contains menu items
  const menuCards = resInfo?.cards?.find(
    card => card?.groupedCard?.cardGroupMap?.REGULAR
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  
  //console.log("Extracted menuCards:", menuCards);
  

  // Safely extract restaurant info
  const { name, cuisines, costForTwo } = restaurantInfo || {};

  // console.log(restaurantInfo)
  // Filter categories from menu cards
  const categories = menuCards?.filter(
    c => c?.card?.card?.["@type"] === 
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  ) || [];

  return (
    <div className="menu text-center bg-gray-800 pt-6">
      <h1 className="font-bold text-white text-2xl">{name}</h1>
      <p className="font-bold text-lg text-gray-400">
        {cuisines?.join(", ")} - {costForTwo /100}
      </p>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === id}
          setIndex={() => {
            if (id === index) {
              setId(-1); // toggle off if clicking the same category
            } else {
              setId(index);
            }
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

