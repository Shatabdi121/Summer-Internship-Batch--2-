import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// Ensure ResCategory is imported if it's in a separate file
import ResCategory from "./ResCategory"; 

const ResMenu = () => {
  const [resData, setResData] = useState(null);
  const [categories, setCategories] = useState([]);

  const { resId } = useParams();
  
  const Menu_URL = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0035068&lng=77.5890953&restaurantId=${resId}`;
  
  async function fetchRestaurentMenu() {
    try {
      const data = await fetch(Menu_URL);
      const json = await data.json();
      
      const cardsArray = json?.data?.cards || [];

      // 1. Find restaurant info dynamically
      const restaurantInfo = cardsArray.find(
        (x) => x?.card?.card?.info
      )?.card?.card?.info;
      
      // 2. Find grouped menu cards dynamically
      const groupedCardData = cardsArray.find(
        (x) => x?.groupedCard
      )?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

      // 3. Filter out item categories
      const filteredCategories = groupedCardData.filter(
        (c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

      // 4. Set state safely using local variables
      setResData(restaurantInfo);
      setCategories(filteredCategories);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  }
  
  useEffect(() => {
    fetchRestaurentMenu();
  }, [resId]); // Added resId dependency in case the route changes
  
  // Early return if data hasn't loaded yet
  if (!resData) {
    return <div className="text-center mt-10 text-gray-500">Loading restaurant menu...</div>;
  }

  const { name, avgRatingString } = resData; 

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-gray-200 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">{name}</h1>
        </div>
        {avgRatingString && (
          <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-2 flex items-center justify-center shadow-sm">
            <span className="text-green-700 font-bold text-base flex items-center gap-1">
              ⭐ Ratings: {avgRatingString}
            </span>
          </div>
        )}
      </div>
      
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-gray-800 tracking-wide border-b border-gray-100 pb-2">Menu</h3>
        <div className="divide-y divide-gray-100">
          {categories.length > 0 ? (
            categories.map((category, index) => (
              // Using title or index as fallback key
              <ResCategory data={category?.card?.card} key={category?.card?.card?.title || index} />
            ))
          ) : (
            <p className="text-gray-500">No categories found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResMenu;