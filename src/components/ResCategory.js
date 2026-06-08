import React,{useState} from 'react'
import ItemList from './ItemList';
const ResCategory = ({ data }) => {

    const [isOpen, setIsOpen] = useState(false);
  console.log(data);
  
    const handleClick=()=>{
        console.log("Print");
        setIsOpen(!isOpen);
    }
  return (
    <div>
    <div className="flex items-center justify-between mt-6 mb-4 crusor-pointer" onClick={handleClick}>
        <span className="text-xl font-bold text-gray-700 border-l-4 border-orange-500 pl-3 mb-6">
          {data?.title} ({data?.itemCards?.length || 0})
        </span>
        <span>⬇️</span>
        </div>
        {isOpen && <ItemList items={data?.itemCards} />}
    </div>
  )
}

export default ResCategory
