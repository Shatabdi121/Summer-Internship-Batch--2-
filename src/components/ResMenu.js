import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ResMenu = () => {
  const [resMenuDataFromAPI, setResMenuDataFromAPI] = useState([]);

  let x = useParams();
  console.log(x.resId);
  const Menu_URL =
    "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0035068&lng=77.5890953&restaurantId=" +
    x.resId;
  async function fetchRestaurentMenu() {
    const data = await fetch(Menu_URL);
    const json = await data.json();
    console.log(json);

    setResMenuDataFromAPI(json.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
    console.log(resMenuDataFromAPI);
  }

  useEffect(() => {
    fetchRestaurentMenu();
  }, []);
  
  return (
    <div className="menu-page-wrapper">
      <div className="restaurant-meta-container">
        <h1 className="restaurant-main-title">Restaurent Name: </h1>
        <h3 className="restaurant-rating-display">Ratings: </h3>
      </div>
      <div className="menu-list-container">
        <h3 className="menu-section-heading">Menu</h3>
        {resMenuDataFromAPI.map((menu, index) => (
          <p className="menu-item-row" key={index}>
            {menu.card.info.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ResMenu;
