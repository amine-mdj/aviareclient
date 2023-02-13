import React, { useState } from 'react';
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios'
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

const Article = () =>{
  const [title, setTitle] = useState('')
  const { quill, quillRef } = useQuill()



  const ontitleChange = (e) =>{
    setTitle(e.target.value )
 }



  const onSubmit = (e) => {
    e.preventDefault()
    const article = quillRef.current.firstChild.innerHTML
     axios.post('http://localhost:8000/article',{article: article, title: title})
    
    
}



    return (<div>
    <DrawerHeader />
    <div style={{ marginTop:'50px',marginLeft:'100px' }}>
    <TextField
     sx={{width:1000, mb:4}}
      id="filled-basic"
       label="title"
        variant="filled"
        value={title}
        onChange={ontitleChange}
         />
    <div style={{ width: 1000, height: 350 }}>
     <div ref={quillRef} />
    </div>
    </div>
    <Box sx={{width: 1250,height:50,mt:8, position:'relative'}}>
        <Button color="error"  size="large" variant="text" onClick={onSubmit} startIcon={<SendIcon />} sx={{position:'absolute',backgroundColor:'#F1DBBF', right:50, top:20}}>Publier</Button>
      </Box>
      <Box sx={{width: 1250,height:50, position:'relative'}}>
        
      </Box>
    </div>)
}


export default Article