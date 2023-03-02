import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { Typography } from '@mui/material'
import DescriptionIcon from '@mui/icons-material/Description'
import SaveIcon from '@mui/icons-material/Save'
import {useState} from 'react'
import { useLocation } from 'react-router-dom'
import axios from'axios'
import { useMutation } from 'react-query'



const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const updateData = (data) => {
    return axios.put(`http://localhost:8000/materials/${data.id}`, data.formData, data.config)
  }

const MaterialEdit = () =>{
    const {state} = useLocation();
    const byteCharacters = atob(state.b64);
    const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
     }
    const byteArray = new Uint8Array(byteNumbers);
    const fileimg = new File([byteArray],'oiseaux n', { type: "image/png" })
    const [matimg, setMatimg] = useState(fileimg)
    const [title, setTitle] = useState(state.title)
    const [price, setPrice] = useState(state.price)
    const {mutate:updatemat} = useMutation(updateData)

    
    const token = localStorage.getItem("accesstoken")

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const onFileChange = (e) =>{
        setMatimg(e.target.files[0])
        
     }
 
    const ontitleChange = (e) =>{
         setTitle(e.target.value )
      }
 
    const  onpriceChange = (e) =>{
         setPrice( e.target.value )
      }

      const onSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('matimg', matimg)
        formData.append('title', title)
        formData.append('price', price)
         const mutatedata =  {formData: formData, id: state.id, config: config}
        updatemat(mutatedata)
    }


    return (<Box>
    <Box
        component="form"
        sx={{
           m: 1,
            width: 1250,
             display:'flex',
             flexDirection:'column',
            justifyContent:'center',
        alignItems:'center'  }
        }
        noValidate
        autoComplete="off"
      >
        <DrawerHeader />
        
        <Box sx={{width:220,
             height:200,
             display:'flex',
             flexDirection:'column',
             
              alignItems:'center',
              backgroundColor:'#edf2f7',
              border:3 ,
              borderStyle:'dashed',
              borderColor: '#cbd5e0',
              mt:2 }}>
        <label htmlFor="upload-photo">
        <input
              style={{ display: 'none' }}
               id="upload-photo"
               name="upload-photo"
               type="file"
               onChange={onFileChange}
       />
       
       <Button sx={{margin:2}} color="error" variant="contained" component="span" startIcon={<AddCircleOutlineIcon />}>
       Upload 
          </Button>
          
      </label>
      <Typography paragraph>Supported files</Typography>
      <Typography paragraph>PNG</Typography>

      </Box>
      <Box sx={{backgroundColor:'#f55e3038', p:2, width:220 , mt:1}}  >
      <DescriptionIcon color='error'  sx={{display:'inline-block' ,mr:1}} />
        <Typography sx={{display:'inline-block'}}>file name</Typography>
        
      </Box>
      <TextField sx={{display:'block', m:2}}
       id="outlined-basic"
        label="title"
         variant="standard"
       
       value={title}
        onChange={ontitleChange}
       />
        <TextField
         sx={{display:'block',  m:2}}
          id="filled-basic"
           label="price"
            variant="standard"
             
             value={price}
              onChange={onpriceChange}
             />
      </Box>
      <Box sx={{width: 1250,height:50, position:'relative'}}>
        <Button color="error" onClick={onSubmit} size="large" variant="contained" startIcon={<SaveIcon />} sx={{position:'absolute', right:50, top:20}}>Save</Button>
      </Box>
      </Box>)
}

export default MaterialEdit