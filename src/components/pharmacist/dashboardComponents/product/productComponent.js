import { DeleteOutlined } from "@mui/icons-material";
import { Grid ,Box} from "@mui/material";
import React from "react";
import TagCard from "../cards/TagCard";
import Container from "@mui/material/Container";
import AutorenewIcon from '@mui/icons-material/Autorenew';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import {ThemeProvider ,createTheme} from '@mui/material/styles';
import axios from 'axios';
import ProductTable from './productTable';
import {useNavigate} from 'react-router-dom'



const theme = createTheme({
  palette:{
    success: {
      main: '#ffffff'
    }
  }
});

const ProductComponent = () => {
    const navigate = useNavigate();
  const [products,setProducts] = React.useState([]);
  const [totalProducts,setTotalProducts] = React.useState(0);

   const fillRows = ()=>{
     var rows = [];

     products.map( (product,index)=>{
          rows[index]= {id:index,
                        name:product.title,
                        pq:product.quantity,
                        amount: product.price,
                        img: product.img,
                        inStock:(product.quantity==0)?"Out of Stock":"In Stock",
                        date:product.createdAt};

     });
        return rows;

   }

   const getProducts = ()=>{
       setTotalProducts(0);
     axios.get("http://localhost:3000/api/admin/products").
     then((res)=> res.data).
     then((r)=>{setProducts(r);
      setTotalProducts(r.length);
        })
     .catch((err)=>{
       console.log(err);
     });
   }

   const deleteProductByName = (name) => {

     var foundProduct = {};
     products.map(product=>{
           if(product.title ===name){
              foundProduct = product; 
            }
       });
       axios.delete("http://localhost:4000/api/products/"+foundProduct._id).then((response)=>{
           console.log(response);
           getProducts();
       }).catch((error)=>{
           console.log(error);
       })
   }
   
    
    const getProductIdByName = (name) =>{
        var foundProduct = {};
     products.map(product=>{
           if(product.title ===name){
              foundProduct = product; 
            }
       });

       return foundProduct._id;
    }

  


   React.useEffect(getProducts,[]);

   



  return (
    <ThemeProvider theme={theme}>
    <Box sx={{paddingLeft:5,
        paddingRight:5}}>
      <Grid container spacing={3} >
        <Grid item  sm={12} md={6} lg={4}>
           {}
          <TagCard
            title={"Total Products"}
            value={totalProducts}
            icon={<AutorenewIcon fontSize="large" color="success"/>}
            category="cash"
            background="#32c225"
          />
        </Grid>
        <Grid item  sm={12} md={6} lg={4}>
          <TagCard
            title={"Add Product"}
            icon={<AssignmentTurnedInIcon fontSize="large" color="success" onClick={()=>{navigate("/dashboard/products/addProduct")}}/>}
            category="cash"
            background="#2581c2"
          />
        </Grid>
      </Grid>
      <ProductTable  rows={fillRows()} delete={deleteProductByName}  update={getProductIdByName}></ProductTable>
    </Box>
    </ThemeProvider>
  );
};
export default ProductComponent;
