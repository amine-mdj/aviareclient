import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import 'react-toastify/dist/ReactToastify.css'

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  

const Orderdetails = () =>{
    const {state} = useLocation();
      
    const [pageSize, setPageSize] = React.useState(5);
    
    const columns = React.useMemo(()=> [
            
          
         {
            field: 'img',
            headerName: 'Status',
            flex:1,
            renderCell:(params) =>{
                
              return  (<img style={{margin:'50px'}} width='70' height='100' src={`data:image/png;base64,${params.value}`}/>)}
            
          },
    
        {
            field: 'title',
            flex:1,
            headerName: 'Title',
            editable: true,
          },
          
        {
          field: 'price',
          flex:1,
          headerName: 'Price',
          editable: true,
        },
                    
      ] )
        
    return(<Box component="main" sx={{ width: '100%',
    height: 500, '& button': { m: 2 }  }}>
      <DrawerHeader />
                
      {state.items?.length>0
    ? <DataGrid
        rows={state.items}
        columns={columns}
        pageSize={pageSize}
        getRowId={(row) => Math.random()}
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
  /> : <Typography variant="h6" >Loading...</Typography>}
   
    </Box>)
}

export default Orderdetails