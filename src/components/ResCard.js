import React from 'react'

const ResCard = ({name,price,imgSrc}) => {




  const RES_IMAGE_URL="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
  
  return (
   <div className="res-card">
        <img className='res-image' src={RES_IMAGE_URL+imgSrc} />
        <div className='resInfo'>
        <h3 className='res-name'>{name}</h3>
        <h5 className='res-ratings'>4.4</h5>
        <h5 className='res-cuisines'>{price} </h5>
        <h5 className='res-location'>RT Nagar</h5>
        </div>
    </div>
  )
}

export default ResCard
