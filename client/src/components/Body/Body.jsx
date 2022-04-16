import React from 'react'
import "./Body.css"
import { Container } from '@mui/material';
import Headers from '../Header/Header'
import FormDialog from '../AddWord/AddWord'
import MeaningList from '../MeaningList/MeaningList'
const Body = () => {
  return (
    <div className='body'>
      <div className='container'>
          <Headers/>
          <MeaningList />
          <FormDialog/>
      </div>

    </div>
  )
}

export default Body
