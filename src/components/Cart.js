import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  // Accessing cart items from Redux store
  const cartItems = useSelector((store) => store.cart.items)

  // Calculate total price dynamically
  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + (item.card?.info?.price || 0) / 100
  }, 0)

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-8 border-b pb-4">
          Shopping Cart ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-200">
            <p className="text-gray-500 text-lg">Your cart is empty.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cart Items List */}
            <div className="md:col-span-2 space-y-4">
              {cartItems.map((item, index) => {
                const { name, price, imageId, description } = item.card?.info || {}
                
                return (
                  <div 
                    key={index} 
                    className="flex items-center bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    {/* Optional Item Image (Fallback if imageId doesn't exist) */}
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 bg-gray-100">
                      <img
                        src={imageId ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208/${imageId}` : "https://via.placeholder.com/80"}
                        alt={name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-semibold text-gray-900">
                          <h3>{name}</h3>
                          <p className="ml-4">₹{price ? price / 100 : 0}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                          {description || "No description available."}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Order Summary Side Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-fit sticky top-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
              <div className="flow-root">
                <div className="-my-4 divide-y divide-gray-200">
                  <div className="py-4 flex justify-between text-sm text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="py-4 flex justify-between text-sm text-gray-600">
                    <span>Shipping</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>
                  <div className="py-4 flex justify-between text-base font-bold text-gray-900">
                    <span>Total Amount</span>
                    <span>₹{totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button className="mt-6 w-full bg-orange-500 text-white py-3 px-4 rounded-md font-medium hover:bg-orange-600 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart