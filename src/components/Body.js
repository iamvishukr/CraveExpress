import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerCards from "./ShimmerCards";
import { Link } from "react-router-dom";

const Body = () => {

    const [ listOfRestaurants, setListOfRestaurants] = useState([]);
    const [ filteredRestaurants, setfilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestarurantCardPromoted = withPromotedLabel(RestaurantCard);
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
        return <ShimmerCards />;
    };

    return(
        <div className="body md:items-center  sm:bg-purple-100 md:bg-pink-100 lg:bg-white sm:flex-row flex-wrap">
            <div className="filter flex m-4 justify-end items-center">
                <div className="search m-4  border border-solid border-black flex  ">
                    <input type="text" className="search-box px-20 " value={searchText} 
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }} />
                    <div>

                    <button className=" py-2 px-4 border-solid border-black bg-amber-300   "
                     onClick={()=>{

                        const filteredRestaurants = listOfRestaurants.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setfilteredRestaurants(filteredRestaurants);
                     }}
                    >Search</button>
                    </div>
                </div>
                <button className="filter-btn  h-10 px-2  text-sm rounded-md border border-solid border-black bg-amber-300 sm:align-bottom" 
                onClick={()=>{console.log("button clicked")
                const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating>4.2);
                setfilteredRestaurants(filteredList);
            }}
                >Top Rated</button>
            </div>
            
                
            <div className="restaurant-container flex flex-wrap ml-16 gap-1 "/*re-using card component*/>  
            {filteredRestaurants.map((restaurant) => (
                  
                  <Link style={{textDecoration: 'none'}} key={restaurant.info.id}
                        to={'/restaurants/' + restaurant.info.id}>
                        {restaurant?.info?.veg ? (
                            <RestarurantCardPromoted resData={restaurant}/>
                        ): (<RestaurantCard  resData = {restaurant}/>
                        )}
                        
                  </Link> 
                ))}
            </div> 
        </div>
    )
}

export default Body;