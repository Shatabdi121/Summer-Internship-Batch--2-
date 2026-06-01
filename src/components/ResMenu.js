import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ResMenu = () => {
  const [resMenuDataFromAPI, setResMenuDataFromAPI] = useState([]);
  const [resData,setResData]=useState([]);

  let x = useParams();
  console.log(x.resId);
  const Menu_URL ="https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0035068&lng=77.5890953&restaurantId=" + x.resId;
  async function fetchRestaurentMenu() {
    const data = await fetch(Menu_URL);
    const json = await data.json();
    console.log(json);

    setResMenuDataFromAPI(json.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards || []);
    setResData(json.data.cards[2].card.card.info)
    console.log(resData);
  }

  useEffect(() => {
    fetchRestaurentMenu();
  }, []);
  
  return (
    <div className="menu-page-wrapper">
      <div className="restaurant-meta-container">
        <h1 className="restaurant-main-title">{resData.name} </h1>
        <h3 className="restaurant-rating-display">Ratings: {resData.avgRatingString} </h3>
      </div>
      <div className="menu-list-container">
        <h3 className="menu-section-heading">Menu</h3>
        {resMenuDataFromAPI.map((menu, index) => (
          <div key={index} className="menu-item-row">
          <p className="menu-item">
            {menu.card.info.name}  {menu.card.info.defaultPrice/100}
          </p>
          <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+menu.card.info.imageId} className="menu-img"/>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default ResMenu;
