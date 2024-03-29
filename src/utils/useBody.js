import { useState, useEffect } from 'react';
const useBody = () => {
    const [ listOfRestaurants, setListOfRestaurants] = useState([]);
    const [ filteredRestaurants, setfilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    

    
    useEffect(()=>{
            fetchData();
        },[]);

    const fetchData = async () =>{
        const data = await fetch(
            'https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return listOfRestaurants,setListOfRestaurants,setfilteredRestaurants, filteredRestaurants, searchText, setSearchText;
}

export default useBody;