import React, { useEffect, useState } from 'react'
import {TextField } from '@mui/material'
import './MeaningList.css'
import MeaningDetails from '../MeaningDetails/MeaningDetails'

// listing all word which is comming from mongodb and filtering them according to search text;

const MeaningList = () => {

  const [text, setText] = useState("")
  const [details, setDetails] = useState()
  const [detailsStatus, setDetaisStatus] = useState(false)
    const [data, setData] = useState([])
    
  const fetchDataFromMongoDB = ()=>{
       fetch("https://dictionary09.herokuapp.com/dictionary").then(response=>response.json()).then(res=>{

         // reversing data which is comming from mongodb so that new added word will come to the top

         let reverse = [...res].reverse()
         setData(reverse)
         
       })
  }
  
  // passing props setDetaisStatus into MeaningDetails component
 // when detailsStatus is true only MeaningDetails display otherwise MeaningList
 
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
     <div className='header'>
          <div className='inputs'> 
          <TextField value={text || ""} onChange={(e)=>setText(e.target.value)} style={{width:"100%", color:"whitesmoke"}} id="standard-basic"   label="Vocab" variant="standard" />
          </div>
    </div>

        {detailsStatus ? <MeaningDetails handleHistory={handleHistory} details={details}/> : data.filter(val=>{
          if(text === ""){
            return val;
          }else if(val.word.toLowerCase().includes(text.toLocaleLowerCase())){
            return val;
          }
        }).map((item,i)=>{
           
           return  <div key={i} className="meaning-item" onClick={()=>
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

// let res = findWord.filter((val)=>{
//   if(text=== ""){
//     return val;
//   }else if(val.word.toLowerCase().includes(text.toLocaleLowerCase())){
//     return val;
//   }
  

// <div className='meanings' >
//         {detailsStatus ? <MeaningDetails handleHistory={handleHistory} details={details}/> : data.map((item,i)=>{
           
//            return  <div key={i} className="meaning-item" onClick={()=>
//                    handleDetails(item)
//         }>
//            <div><b>{item.word}</b></div>
//            <div>{item.meaning}</div>
//            <hr />
//           </div>
        
          
//         }) 
        
//         }
//      </div>
