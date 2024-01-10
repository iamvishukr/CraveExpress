import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {

    const [ listOfRestaurants, setListOfRestaurants] = useState([]);
    const [ filteredRestaurants, setfilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    console.log("body rendered");


    
    useEffect(()=>{
            fetchData();
        },[]);

    const fetchData = async () =>{
        const data = await fetch(
            'https://corsproxy.org/?' + encodeURIComponent('https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.397289&lng=85.398697&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        );

        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
 
    if (listOfRestaurants.length === 0){
        return <Shimmer />;
    }

    return(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} 
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }} />
                    <button
                     onClick={()=>{

                        const filteredRestaurants = listOfRestaurants.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setfilteredRestaurants(filteredRestaurants);
                     }}
                    >Search</button>
                </div>
                <button className="filter-btn" 
                onClick={()=>{console.log("button clicked")
                const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating>4.5);
                setListOfRestaurants(filteredList);
            }}
                >Top Rated</button>
            </div>
            <div className="restaurant-container"/*re-using card component*/>  
                {filteredRestaurants.map((restaurant) => (
                  <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>
                ))}
            </div> 
        </div>
    )
}

export default Body;