import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import { SWIGGY_MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(`${SWIGGY_MENU_URL}/${resId}`);
    const jsonData = await data.json();
    setRestaurantInfo(jsonData?.data);
  };

  console.log("restaurantData", restaurantInfo);

  if (restaurantInfo === null) {
    return <Shimmer />;
  }
  const { name, areaName, cuisines, sla, avgRating } =
    restaurantInfo?.cards[0]?.card?.card?.info;
  const itemsCards =
    restaurantInfo?.cards[2]?.groupedCard.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;
  console.log("itemsCards", itemsCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines}</h2>
      <p>{areaName}</p>
      <p>{`${sla?.deliveryTime}mins ${avgRating}stars`}</p>
      <h1>Menu</h1>
      <ul>
        {itemsCards?.map((itemCard) => (
          <li>{itemCard?.card?.info?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
