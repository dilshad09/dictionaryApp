

import { useState, useEffect } from 'react';
import axios from 'axios'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function FormDialog() {
    const [word, setWord] = useState("")
  const [meanings, setMeanings] = useState([])
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
   const addToDictionary = async()=>{
  try {
    const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    setMeanings(data.data)
    
    console.log("data", data)
  } catch (error) {
    console.log(error)
  }
  }

  

    const postDataToMongoDB =async ()=>{
    await axios.post("http://localhost:5000/dictionary",{
      word:meanings[0].word,
      meaning:meanings[0].meanings[0].definitions.map((def)=>def.definition)
    }).then(res=>console.log("post", res))
  }
 
  useEffect(()=>{
    postDataToMongoDB()
  },[meanings])
  return (
    <div>
         <Fab size="large" color="secondary" aria-label="add" onClick={handleClickOpen} style={{position:"absolute", bottom:"1rem", right:"1rem"}}>
          <AddIcon />
          </Fab>
   
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add to Dictionary</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="New word"
            type="text"
            fullWidth
            variant="standard"

            value={word || ""}
            onChange={(e)=>setWord(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={()=>{
            addToDictionary()
            setWord("")
          }}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
  }

