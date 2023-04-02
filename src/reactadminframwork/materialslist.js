import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useQuery, useMutation} from 'react-query'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const fetchData = () => {
    return axios.get("https://aviaire-api.onrender.com/materials")
  }

const Materialslist = () =>{
    const {data} = useQuery('data-perpage-admin',()=> fetchData() )

    const token = localStorage.getItem("accesstoken")

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const deletemat = useMutation((id) => {
      return axios.delete(`https://aviaire-api.onrender.com/materials/${id}`, config);
    });
    const [pageSize, setPageSize] = React.useState(5);
    const navigate = useNavigate()
    

    const handleadd = ()=>{
        navigate('/admin/addmateriel')
    }

    const handleEdit = (mat) => {
      navigate(`/admin/materialedit/${mat.id}`, {state: mat})
    
  }

  const handleDelete = (mat) => {
    deletemat.mutate(mat.id)
  
}
    

    const columns = React.useMemo(()=> [
        {
            field: 'b64',
            flex:1,
            headerName: 'Image',
            width: 110,
           renderCell:(params) => (<img width='50' height='50' src={`data:image/png;base64,${params.value}`}/>)
            
          },
    
          { field: 'id',
            flex:1,
            headerName: 'ID',
         },
    
        {
            field: 'price',
            flex:1,
            headerName: 'Price',
            editable: true,
          },
        {
          field: 'title',
          flex:1,
          headerName: 'Title',
          editable: true,
        },
        {
          field: 'edit',
          flex:1,
          renderCell:(params) =>{
              
            return  (<Button  color="primary" onClick={()=>handleEdit(params.row)}  startIcon={<EditIcon />}   >
          Edit
            </Button>)}
          
        },
        {
          field: 'delete',  
        flex:1,
        renderCell:(params) =>{
          
           return (<Button color="error" onClick={()=>handleDelete(params.row)} startIcon={<DeleteIcon />}   >
        Delete
          </Button>)}
        
      },
       
        
        
        
      ] )
        
    return(<Box component="main" sx={{ width: '100%',
    height: 500, '& button': { m: 2 }  }}>
      <DrawerHeader />
      <Button color="primary" onClick={handleadd} startIcon={<AddIcon />}  sx={{ position: "relative", top: 0, right: 0, zIndex: 2000 }} >
    ajouter un materiel pour oiseaux
      </Button>
      
      {data?.data.length>0
    ? <DataGrid
         rows={data.data}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 15]}
        pagination
        checkboxSelection
        disableSelectionOnClick
        components={{ Toolbar: GridToolbar }}
        experimentalFeatures={{ newEditingApi: true }}
  /> : <Typography variant="h6" >No data for this church yet!</Typography>}
   
    </Box>)
}

export default Materialslist