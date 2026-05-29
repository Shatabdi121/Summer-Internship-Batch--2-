import React, { useEffect, useState } from 'react'
import ResCard from './ResCard'
import { SWIGGY_RES_API } from '../utils/constants'

const Body = () => {
    // const copyOfResData=resData
    const [resData,setResData]=useState([]);
    const copyOfResData=resData

    async function fetchRestaurent(){
        const data=await fetch(SWIGGY_RES_API)
        const resDataFromAPI=await data.json()
        console.log(resDataFromAPI);
        
        setResData(resDataFromAPI.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        console.log(resData)
    }
    
    useEffect(()=>{
      fetchRestaurent()
    },[])

    function topRes(){
     const a= copyOfResData.filter((res)=>{
        return res.info.avgRating>4.5
     })
     setResData(a)
    }

function searchText(e){

  const a= copyOfResData.filter((res)=>{
      const name=res.info.name.toLowerCase()
        return name.includes(e.target.value.toLowerCase())
     })
     setResData(a)
}

  return (
    <div >
    <button onClick={topRes} className='top-rated'>Top Rated </button>
    <input  type='text' onChange={searchText}/>
    <div className='container'>
     {
      resData.map((res)=>{
        return(
          <ResCard name={res.info.name}   ratings={res.info.avgRating} cuisines={res.info.cuisines}  address={res.info.locality} imgSrc={res.info.cloudinaryImageId} key={res.info.id} />
        )
      })
     }
    </div>
    </div>
  )
}

export default Body
