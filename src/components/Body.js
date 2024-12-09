import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import ShimmerCards from "./ShimmerCards";
import SearchSuggestions from "./SearchSuggestions";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [suggestions, setSuggestions] = useState([]);

  const RestarurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page=${currentPage}`
      );

      const json = await data.json();
      const newRestaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setListOfRestaurants((prev) => [...prev, ...newRestaurants]);
      setFilteredRestaurants((prev) => [...prev, ...newRestaurants]);
    };

    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight - 100) {
        setCurrentPage((prev) => prev + 1);
      }
    };

    fetchData();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage]);

  useEffect(() => {
    if (searchText.length > 0) {
      const suggestionList = listOfRestaurants.filter((restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setSuggestions(suggestionList);
    } else {
      setSuggestions([]);
    }
  }, [searchText, listOfRestaurants]);

  const handleSearch = () => {
    const filteredRestaurants = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredRestaurants);
    setSuggestions([]);
  };

  if (listOfRestaurants.length === 0) {
    return <ShimmerCards />;
  }

  return (
    <div className="body md:items-center text-black min-h-screen bg-gray-800 sm:flex-row flex-wrap">
      <div className="filter flex rounded-2xl justify-end items-center mr-14">
        <div className="search m-4 flex flex-col relative">
          <div className="flex">
            <input
              type="text"
              className="search-box w-80 px-4 py-2 rounded-l-md"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              placeholder="Search for restaurants or dishes"
            />
            <button
              className="py-2 px-4 text-black bg-yellow-500 rounded-r-md hover:bg-yellow-600 transition-colors duration-300"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          {suggestions.length > 0 && (
            <SearchSuggestions suggestions={suggestions} setSearchText={setSearchText} />
          )}
        </div>
        <button
          className="filter-btn h-10 px-4 text-sm rounded-md border border-solid text-black border-black bg-amber-500 hover:bg-amber-600 transition-colors duration-300 sm:align-bottom"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>

      <div className="restaurant-container flex flex-wrap ml-16 gap-4">
        {filteredRestaurants.map((restaurant) => (
          <Link
            className="no-underline"
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant?.info?.veg ? (
              <RestarurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

