import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ResMenu = () => {
    const [resMenuDataFromAPI,setResMenuDataFromAPI]=useState([])

    let x=useParams()
    console.log(x.resId)
    const Menu_URL="https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0035068&lng=77.5890953&restaurantId="+x.resId
    async function fetchRestaurentMenu(){
        const data=await fetch(Menu_URL)
        const json=await data.json()
        console.log(json);
        
        setResMenuDataFromAPI(json.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
        console.log(resMenuDataFromAPI)
    }
    
    useEffect(()=>{
        fetchRestaurentMenu()

    },[])
  return (
    <div>
      <div>
      <h1>Restaurent Name: </h1>
      <h3>Ratings: </h3>
      </div>
      <div>
      <h3>Menu</h3>
      {
        resMenuDataFromAPI.map((menu,index)=>{
            return(
                <p key={index}>{menu.card.info.name}</p>
            )
        })
      }
      </div>
    </div>
  )
}

export default ResMenu
