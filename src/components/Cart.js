import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, removeItems } from '../utils/cartSlice'

const Cart = () => {
  const dispatch = useDispatch()

  const clear = () => {
    dispatch(clearCart())
  }

  const remove = (item) => {
    dispatch(removeItems(item))
  }

  // Accessing cart items from Redux store
  const cartItems = useSelector((store) => store.cart.items)

  // Calculate total price dynamically
  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + (item.card?.info?.price || 0) / 100
  }, 0)

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section with Title and Clear Cart Button */}
        <div className="flex justify-between items-center mb-8 border-b pb-4">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Shopping Cart ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
          </h1>
          {cartItems.length > 0 && (
            <button 
              className="text-sm text-red-600 hover:text-white font-semibold border border-red-200 hover:border-red-600 bg-red-50 hover:bg-red-600 rounded-lg px-4 py-2 transition-all duration-200 shadow-sm"  
              onClick={clear}
            >
              Clear Cart
            </button>
          )}
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-200">
            <p className="text-gray-500 text-lg">Your cart is empty.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            {/* Cart Items List */}
            <div className="md:col-span-2 space-y-4">
              {cartItems.map((item, index) => {
                const { id, name, price, imageId, description } = item.card?.info || {}
                
                return (
                  <div 
                    key={id || index} 
                    className="flex items-center bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    {/* Item Image */}
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 bg-gray-100">
                      <img
                        src={imageId ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208/${imageId}` : "https://via.placeholder.com/80"}
                        alt={name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="ml-4 flex flex-1 flex-col justify-between">
                      <div className="flex justify-between text-base font-semibold text-gray-900">
                        <h3 className="pr-2">{name}</h3>
                        <p className="whitespace-nowrap">₹{price ? price / 100 : 0}</p>
                      </div>
                      
                      <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                        {description || "No description available."}
                      </p>

                      {/* Remove Button Alignment */}
                      <div className="flex justify-end mt-2">
                        <button 
                          className="text-xs text-red-600 hover:text-red-700 font-medium border border-transparent hover:underline transition" 
                          onClick={() => remove(item)}
                        >
                          Remove item
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Order Summary Side Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky top-6">
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