import React from 'react'
import {useNavigate} from 'react-router'
import './MeaningDetails.css'
const MeaningDetails = ({details}) => {
  const navigate = useNavigate()
  console.log("hh", details.word)
  return (
    <div className='meaning-details'>
      <div className='cancel-btn' onClick={()=>navigate("/")}>+</div>
      <div><b>{details.word}</b></div>
      <div>{details.meaning}</div>
    </div>
  )
}

export default MeaningDetails
