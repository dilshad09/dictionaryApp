import { MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'
import './Header.css'

const Header = ({word, setWord}) => {
    
    
  return (
    <div className='header'>
      <div className='title'>
          <span>{word ? word : "Word Hunt"}</span>
          <div className='inputs'>
          <TextField id="standard-basic" value={word} onChange={(e)=>setWord(e.target.value)} label="Search" variant="standard" />
          </div>
      </div>
    </div>
  )
}

export default Header
