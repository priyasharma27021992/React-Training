import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
const Body = () => {
  // Array destructuring
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  // [listOfRestaurants, setListOfRestaurants] = arr;
  // listOfRestaurants = arr[0]

  //   State variable
  // as soon as listOfRestaurants changes, the render happens
  //   const [listOfRestaurants, setListOfRestaurants] = useState([
  //     {
  //       info: {
  //         id: "523613",
  //         name: "Burger King",
  //         cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  //         costForTwo: "₹350 for two",
  //         cuisines: ["Burgers", "American"],
  //         avgRating: 4.3,
  //         sla: {
  //           deliveryTime: 40,
  //         },
  //       },
  //     },
  //     {
  //       info: {
  //         id: "523612",
  //         name: "KFC",
  //         cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  //         costForTwo: "₹350 for two",
  //         cuisines: ["Burgers", "American"],
  //         avgRating: 3.3,
  //         sla: {
  //           deliveryTime: 40,
  //         },
  //       },
  //     },
  //   ]);

  // listOfRestaurants is a normal js variable
  let listOfRestaurantsJS = [
    {
      info: {
        id: "523613",
        name: "Burger King",
        cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        costForTwo: "₹350 for two",
        cuisines: ["Burgers", "American"],
        avgRating: 4.3,
        sla: {
          deliveryTime: 40,
        },
      },
    },
    {
      info: {
        id: "523612",
        name: "KFC",
        cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        costForTwo: "₹350 for two",
        cuisines: ["Burgers", "American"],
        avgRating: 3.3,
        sla: {
          deliveryTime: 40,
        },
      },
    },
  ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //  filter logic here
            // listOfRestaurants = listOfRestaurants.filter(
            //   (res) => res.info.avgRating > 4
            // );
            // console.log("listOfRestaurants", listOfRestaurants);
            setListOfRestaurants(
              listOfRestaurants.filter((res) => res.info?.avgRating > 4)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((resObj) => (
          <RestaurantCard resData={resObj} />
        ))}
      </div>
    </div>
  );
};

export default Body;
