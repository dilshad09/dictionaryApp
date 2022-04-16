import React, { useState } from 'react'
import {useNavigate} from 'react-router'
import './MeaningDetails.css'
import CloseIcon from '@mui/icons-material/Close';
const MeaningDetails = ({details, handleHistory}) => {
 
  
  return (
    <div className='meaning-details'>
      <div className='cancel-btn' onClick={()=>{
    handleHistory()
      }}>{<CloseIcon/>}</div>
      <div><b>{details.word}</b></div>
      <div>{details.meaning}</div>
    </div>
  )
}

export default MeaningDetails
