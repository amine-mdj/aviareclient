import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import {useQuery} from 'react-query'
import { useNavigate} from 'react-router-dom'
import axiosInstance from '../axiosInstance';
import 'react-toastify/dist/ReactToastify.css'

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const fetchData = (config) => {
    return axiosInstance.get("orders", config)
  }

const Ordershow = () =>{
    
    const token = localStorage.getItem("accesstoken")

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const {data} = useQuery('orders',
    ()=> fetchData(config),
    {
      refetchOnWindowFocus:false
    }
     )
        
    const [pageSize, setPageSize] = React.useState(5);
    const navigate = useNavigate()
 
    const columns = React.useMemo(()=> [
            
          { field: '_id',
            flex:1,
            headerName: 'ID',
         },
    
        {
            field: 'address',
            flex:1,
            headerName: 'Address',
            editable: true,
          },
          {
            field: 'status',
            headerName: 'Status',
            flex:1,
            renderCell:(params) =>{
                
              return  (<Button sx={{borderRadius: 35,color:'orange', borderColor:'orange'}} variant="outlined" disableElevation >Pending</Button>)}
            
          },
        {
          field: 'numitems',
          flex:1,
          headerName: 'Number of items',
          editable: true,
        },
       
        {
          field: 'amount',  
          flex:1,
          headerName: 'Amount',
          editable: true,
          
        
      },
       
        
        
        
      ] )
        
    return(<Box component="main" sx={{ width: '100%',
    height: 500, '& button': { m: 2 }  }}>
      <DrawerHeader />
                
      {data?.data.length>0
    ? <DataGrid
    onRowClick={(params, event) =>navigate(`/admin/orderdetails/${params.row._id}`,{state:params.row})}
         rows={data.data}
        columns={columns}
        pageSize={pageSize}
        getRowId={(row) => row._id}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 15]}
        pagination
        checkboxSelection
        disableSelectionOnClick
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        experimentalFeatures={{ newEditingApi: true }}
  /> : <Typography variant="h6" >No data for this church yet!</Typography>}
   
    </Box>)
}

export default Ordershow