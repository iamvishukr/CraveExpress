import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () =>{

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.876313600000024&lng=81.02215679999999&restaurantId=425&submitAction=ENTER"
        );
        const json = await data.json();
        setResInfo(json.data);
        console.log(json);
    }
    const {name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;


   return resInfo=== null? (
   <Shimmer/>
   ):(
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            
        </div>
    )
}

export default RestaurantMenu;