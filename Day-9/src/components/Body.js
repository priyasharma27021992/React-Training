import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getData = async () => {
    try {
      const data = await fetch(SWIGGY_URL);
      const json = await data.json();
      setListOfRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.error("err", err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  // Conditional rendering
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      {listOfRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="body">
          <div className="filter">
            <div className="search">
              <input
                type="text"
                className="search-box"
                value={searchText}
                // e is a callback method
                onChange={(e) => setSearchText(e?.target?.value)}
              />
              <button
                onClick={() => {
                  // filter the cards
                  setFilteredRestaurants(
                    listOfRestaurants.filter((res) =>
                      res.info?.name
                        ?.toLowerCase()
                        .includes(searchText.toLowerCase())
                    )
                  );
                }}
              >
                Search
              </button>
            </div>
            <button
              className="filter-btn"
              onClick={() => {
                setListOfRestaurants(
                  listOfRestaurants.filter((res) => res.info?.avgRating > 4)
                );
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
          <div className="res-container">
            {filteredRestaurants.map((resObj) => (
              <Link
                to={`/restaurants/${resObj?.info?.id}`}
                key={resObj?.info?.id}
                className="restaurant-link"
              >
                <RestaurantCard resData={resObj} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
