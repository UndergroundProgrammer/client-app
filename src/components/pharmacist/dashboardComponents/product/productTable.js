import * as React from 'react';
import  axios from 'axios';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {Button, Card,CardMedia} from '@mui/material';
import {useNavigate} from 'react-router-dom';





export default function OrderTable(probs) {

   const navigate = useNavigate();
  

  const columns : GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Product Name', width: 160 },
  { field: 'pq', headerName: 'Stock Quantity', width: 130 },
  {
    field: 'amount',
    headerName: 'Amount',
    type: 'number',
    width: 120,
  },
  {
    field: 'inStock',
    headerName: 'InStock',
    width: 160,
  },
   
 {
  field: "Update",
  width:140,
  renderCell: (cellValues) => {
    return (
      <Button
        variant="contained"
        color="primary"
        onClick={(event) => {
              let id= probs.update(cellValues.row.name);
              navigate("/dashboard/products/update/"+id);
        }}
      >
        Update
      </Button>
    );
  }
},
  {
  field: "Delete",
  width:140,
  renderCell: (cellValues) => {
    return (
      <Button
        variant="contained"
        color="error"
        onClick={(event) => {
            probs.delete(cellValues.row.name);
        }}
      >
        delete
      </Button>
    );
  }
},

{
  field: 'img',
  headerName: 'Image',
  width: 200,
  renderCell: (cellValues) => {
    return (
      <Card sx={{ maxWidth: 50 }}>
      <CardMedia
          component="img"
          height="50"
          image={cellValues.row.img}
          alt="Image View"
        />
      </Card>
    );
  }
},
];
  return (
    <div style={{ height: 400, width: '100%' ,marginTop:"2rem"}}>
      <DataGrid
        rows={probs.rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
