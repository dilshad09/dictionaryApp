import React, { useEffect, useState } from 'react'
import './MeaningList.css'
const MeaningList = ({word, meanings}) => {
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

  const handleDetails = (e)=>{
    console.log("details")
  }

  useEffect(()=>{
    fetchDataFromMongoDB()
    console.log("data",data[0].word)
  },[])
  return (
    <>
     <div className='meanings'>
        {data ? data.map((item,i)=>{
          return <div key={i} className="meaning-item" onClick={(e)=>handleDetails(e)}>
           <div><b>{item.word}</b></div>
           <div>{item.meaning}</div>
           <hr />
          </div>
        }) 
        :
         <div>Dilshad</div>
        }
     </div>
    </>
  )
}

export default MeaningList
