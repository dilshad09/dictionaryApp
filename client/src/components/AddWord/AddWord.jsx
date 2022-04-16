

import { useState } from 'react';

// import Header from './components/Header/Header';
// import MeaningList from './components/MeaningList/MeaningList';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
// function AddWord() {
//   const [word, setWord] = useState("")
//   const [meanings, setMeanings] = useState([])

//   const dictionaryApi = async()=>{
//   try {
//     const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
//     setMeanings(data.data)
    
//   } catch (error) {
//     console.log(error)
//   }
//   }
 
//   const postData =async ()=>{
//     await axios.post("http://localhost:5000/dictionary",{
//       word:meanings[0].word,
//       meaning:meanings[0].meanings[0].definitions.map((def)=>def.definition)
//     }).then(res=>console.log("post", res))
//   }
//   useEffect(()=>{
//     dictionaryApi()
//     postData()
//   },[word])
  
// {/*     
//      <Header category={category} setCategory={setCategory} word={word} setWord={setWord}/>
//        { meanings && <MeaningList word={word} category={category} meanings={meanings}/>} */}
     

//      {/*  */}

   


export default function FormDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

     
     {/* add new words in dictionary button */}
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
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
  }
     
  

// export default AddWord;
