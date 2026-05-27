import React from 'react'

const ResCard = () => {
  const RES_IMAGE_URL="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/2a4c6a60-e313-4a2c-ba46-669ea2791e5e_14555.JPG"
  return (
   <div className="res-card">
        <img className='res-image' src={RES_IMAGE_URL} />
        <div className='resInfo'>
        <h3 className='res-name'>Pizza Hut</h3>
        <h5 className='res-ratings'>4.4</h5>
        <h5 className='res-cuisines'>Cuisines </h5>
        <h5 className='res-location'>RT Nagar</h5>
        </div>
    </div>
  )
}

export default ResCard
