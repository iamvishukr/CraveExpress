import { data } from "browserslist";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestarurantCategory";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./ShimmerCards";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantMenu = () =>{

    //const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();
    //const [showIndex, setShowIndex] = useState();

    const [id, setId] = useState(1); // this should be here(above the return) or will cause 'rendered more hooks than previous'

    const resInfo = useRestaurantMenu(resId);
    // useEffect(() => {
    //     fetchMenu();
    // }, []);
    
    // const fetchMenu = async () => {
    //     const data = await fetch( MENU_URL + resId);
    //     const json = await data.json();
    //     setResInfo(json.data);
        
    // };
    
    if (resInfo=== null) return <Shimmer/>;
    
       const {name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

   // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" );

    //console.log(categories);
    
   return (
        <div className="menu text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>

            {/* category accordions */} 

            {categories.map((category,index)=>(
            <RestaurantCategory
             data={category?.card?.card}
             showItems = {index === id ? true : false}
            // setShowIndex={() => setShowIndex(index)}
            setIndex={
                () => {
                  if (id === index)
                    setId(-1); // to toggle the current toggled category
                  else
                    setId(index) 
                }
              }   
             />))}
            
        </div>
    )
}


export default RestaurantMenu;