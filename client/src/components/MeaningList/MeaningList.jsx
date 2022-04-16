import React, { useEffect, useState } from 'react'
import './MeaningList.css'
import MeaningDetails from '../MeaningDetails/MeaningDetails'
import { Navigate, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
const MeaningList = ({word, meanings}) => {
  const navigate = useNavigate()

  const [details, setDetails] = useState()
  const [detailsStatus, setDetaisStatus] = useState(false)
    const [data, setData] = useState([{
      word:"Dilshad",
      meaning:"Ahmad"
    }])
  const fetchDataFromMongoDB = ()=>{
       fetch("http://localhost:5000/dictionary").then(response=>response.json()).then(res=>{
         setData(res)
         console.log("res",res)
       })
  }

  const handleDetails = (item)=>{
    console.log("item", item)
    setDetails(item)
    setDetaisStatus(true)
    
    return <>{<MeaningDetails  details={details}/>}
            
    </>
  }
  
  useEffect(()=>{
    fetchDataFromMongoDB()
  },[])
  return (
    <>
     <div className='meanings' >
        {detailsStatus ? <MeaningDetails  details={details}/> : data.map((item,i)=>{
          return <div key={i} className="meaning-item" onClick={()=>
          handleDetails(item)
        }>
           <div><b>{item.word}</b></div>
           <div>{item.meaning}</div>
           <hr />
          </div>
          
        }) 
        
        }
     </div>
    </>
  )
}



export default MeaningList
