import React from 'react'

const ItemList = ({ items }) => {
  // Safe check to handle empty or undefined items array
  if (!items || items.length === 0) return null;

  return (
    <div className="max-w-3xl mx-auto px-4 divide-y divide-gray-200">
      {items.map((item) => {
        const { id, name, description, price, defaultPrice, imageId } = item.card.info;
        // Swiggy/Zomato APIs usually provide prices in paise, falling back to defaultPrice
        const displayPrice = (price || defaultPrice) / 100;

        return (
          <div 
            key={id} 
            className="flex flex-col sm:flex-row sm:items-center justify-between py-6 gap-4 hover:bg-gray-50/50 transition-colors duration-200 px-2 rounded-lg"
          >
            {/* Left Section: Item Details */}
            <div className="flex-1 space-y-1">
              <h4 className="text-lg font-semibold text-gray-900 tracking-tight">
                {name}
              </h4>
              {description && (
                <p className="text-sm text-gray-500 max-w-xl leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {description}
                </p>
              )}
            </div>

            {/* Right Section: Price & Actions */}
            <div className="flex items-center justify-between sm:justify-end sm:gap-6 min-w-[80px]">
            <img
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + imageId }
                alt={name}
                className="w-16 h-16 rounded-md object-cover"
              />
              <span className="text-base font-bold text-gray-900">
                ₹{displayPrice}
              </span>
              <button className="px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-md hover:bg-orange-600 transition-colors duration-200">
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;