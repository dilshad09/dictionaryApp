import {TextField } from '@mui/material'
import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
const Header = ({word, setWord}) => {
    
    
  return (
    
      <div className='header'>
          <div className='inputs'> 
          <TextField style={{width:"100%", color:"whitesmoke"}} id="standard-basic" value={word} onChange={(e)=>setWord(e.target.value)} label="Vocab" variant="standard" />
          </div>
    </div>
  )
}

export default Header

