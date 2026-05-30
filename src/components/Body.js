import React, { useEffect, useState } from 'react'
import ResCard from './ResCard'
import { SWIGGY_RES_API } from '../utils/constants'
import Shimmer from './Shimmer';
import { Link } from 'react-router';

const Body = () => {
    // const copyOfResData=resData
    const [resData,setResData]=useState(null);
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
if(resData==null){
  return (
    <Shimmer/>
  )
}

  return (
    <div >
    <button onClick={topRes} className='top-rated'>Top Rated </button>
    <input  type='text' onChange={searchText} className='search-text'/>
    <div className='container'>
     {
      resData.map((res)=>{
        return(
          <Link to={"/resMenu/"+res.info.id} key={res.info.id}><ResCard name={res.info.name}   ratings={res.info.avgRating} cuisines={res.info.cuisines}  address={res.info.locality} imgSrc={res.info.cloudinaryImageId} resId={res.info.id}  /></Link>
        )
      })
     }
    </div>
    </div>
  )
}

export default Body
