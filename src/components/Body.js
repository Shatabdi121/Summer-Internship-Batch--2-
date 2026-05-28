import React from 'react'
import ResCard from './ResCard'
import { resData } from '../utils/mockData'

const Body = () => {
    const copyOfResData=resData
  return (
    <div className='container'>
      {
        copyOfResData.map((res,index)=>{
            return(
                <ResCard name={res.info.name} key={res.info.id} imgSrc={res.info.cloudinaryImageId}/>
            )
        })
      }
    </div>
  )
}

export default Body
