import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ResMenu = () => {
  const [resMenuDataFromAPI, setResMenuDataFromAPI] = useState([]);
  const [resData, setResData] = useState(45);

  let x = useParams();
  console.log(x.resId);
  const Menu_URL = "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0035068&lng=77.5890953&restaurantId=" + x.resId;
  
  async function fetchRestaurentMenu() {
    const data = await fetch(Menu_URL);
    const json = await data.json();
    console.log(json);

    setResMenuDataFromAPI(json.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards || []);
    setResData(json.data.cards[2].card.card.info);
    console.log(resMenuDataFromAPI);
  }

  useEffect(() => {
    fetchRestaurentMenu();
  }, []);
  
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-gray-200 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">{resData.name}</h1>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-2 flex items-center justify-center shadow-sm">
          <span className="text-green-700 font-bold text-base flex items-center gap-1">⭐ Ratings: {resData.avgRatingString}</span>
        </div>
      </div>
      
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-gray-800 tracking-wide border-b border-gray-100 pb-2">Menu</h3>
        <div className="divide-y divide-gray-100">
          {resMenuDataFromAPI.map((menu, index) => (
            <div key={index} className="flex justify-between items-center gap-6 py-4 group">
              <p className="text-gray-800 font-medium text-base sm:text-lg flex flex-col gap-1">
                <span className="group-hover:text-blue-600 transition-colors">{menu.card.info.name}</span>
                <span className="text-gray-900 font-semibold text-sm">₹{menu.card.info.defaultPrice / 100}</span>
              </p>
              <img 
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + menu.card.info.imageId} 
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover flex-shrink-0 bg-gray-50 border border-gray-100 shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResMenu;