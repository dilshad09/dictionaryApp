import React from 'react'
import { Container } from '@mui/material';
import Headers from '../Header/Header'
import FormDialog from '../AddWord/AddWord'
const Body = () => {
  return (
    <>
      <Container style={{backgroundColor:"white",width:"25vw", height:"80vh", position:"relative", borderRadius:"5%", marginTop:"2rem"}}>
          <Headers/>
          <FormDialog/>
      </Container>

    </>
  )
}

export default Body
