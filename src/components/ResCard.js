import React from 'react'

const ResCard = (props)=>{

  const RES_IMG_URL="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

  return (
   <div className="res-card">
        <img className='res-image' src={RES_IMG_URL+props.imgSrc} />
        <div className='resInfo'>
        <h3 className='res-name'>{props.name}</h3>
        <h5 className='res-ratings'>{props.ratings}</h5>
        <h5 className='res-cuisines'>{props.cuisines.join(",")} </h5>
        <h5 className='res-location'>{props.address}</h5>
        </div>
    </div>
  )
}

export default ResCard
