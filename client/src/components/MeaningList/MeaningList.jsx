import React, { useEffect, useState } from 'react'
import './MeaningList.css'
import MeaningDetails from '../MeaningDetails/MeaningDetails'
import { Navigate, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
const MeaningList = () => {
  const navigate = useNavigate()

  const [details, setDetails] = useState()
  const [detailsStatus, setDetaisStatus] = useState(false)
    const [data, setData] = useState([])
    
  const fetchDataFromMongoDB = ()=>{
       fetch("http://localhost:5000/dictionary").then(response=>response.json()).then(res=>{
         let reverse = [...res].reverse()
         setData(reverse)
         console.log("res",reverse)
       })
  }
  
  const handleHistory = ()=>{
    setDetaisStatus(false)
  }
  const handleDetails = (item)=>{
    
    setDetails(item)
    setDetaisStatus(true)          
  }
  
  useEffect(()=>{
    fetchDataFromMongoDB()
  },[])
  return (
    <>
     <div className='meanings' >
        {detailsStatus ? <MeaningDetails handleHistory={handleHistory} details={details}/> : data.map((item,i)=>{
          return <>
                  <div key={i} className="meaning-item" onClick={()=>
                   handleDetails(item)
        }>
           <div><b>{item.word}</b></div>
           <div>{item.meaning}</div>
           <hr />
          </div>
          </>
          
        }) 
        
        }
     </div>
    </>
  )
}



export default MeaningList
