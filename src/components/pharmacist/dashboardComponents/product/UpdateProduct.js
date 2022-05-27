import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Textarea from "@mui/material/TextareaAutosize";
import { useNavigate ,useLocation} from "react-router-dom";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import FileUploader from "../../../FileUploader"
import convertImageToBase64 from "../../../ImageBase64";
import { uploadImage } from "../../../ImageUpload";
import alert from "../../../Services/Alert";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import axios from "axios"

const UpdateProduct = (props) => {

 const navigate = useNavigate();
  const location = useLocation();

  const [title, setTitle] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [quantity, setQuantity] = React.useState(0);
  const [image, setImage] = React.useState("");
  const [desc, setDesc] = React.useState("");
 
  const [titleErr, setTitleErr] = React.useState(false);
  const [priceErr, setPriceErr] = React.useState(false);
  const [quantityErr, setQuantityErr] = React.useState(false);
  const [imageErr, setImageErr] = React.useState(false);
  const [descErr, setDescErr] = React.useState(false);

  const [imgUrl, setImgUrl] = React.useState();

  const onDrop = (acceptedFiles, rejectedFiles, imgName) => {
    if (rejectedFiles.length > 0) {
      alert.showWarningAlert("Upload only one image and size limit of 1 MB");
      return;
    } else if (acceptedFiles) {
      convertImageToBase64(acceptedFiles[0], (result, success) => {
        if (success) {
          uploadImage(result, (url, success) => {
            if (success) {
              setImgUrl(url);
              alert.showSuccessAlert("Successfully Uploaded");
              setImage(acceptedFiles[0].name);
            }
          });
        }
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var object = {
      title: "",
      desc: "",
      img: "",
      price:0,
      quantity: 0,
      inStock: true,
    };
    if (title == "") setTitleErr(true);
    if (desc == "") setDescErr(true);
    if (image == "") setImageErr(true);
    if (quantity == null) setQuantityErr(true);
    if (price == null) setPriceErr(true);

    if (title && desc && image && quantity && price) {
      object.title = title;
      object.quantity = quantity;
      object.img = imgUrl;
      object.desc = desc;
      object.price = price;
     

      console.log(object);
      let id = location.pathname.split('/')[4];
       axios.put("https://ar-medicare-backend.herokuapp.com/api/admin/products/"+id,object).then((response) => {
         console.log(response)
         alert("successfully Update");
         }
       
       )
       .catch((error) => console.log(error));
  }}
 

  
  const handleData = () => {
    let id = location.pathname.split('/')[4]
    console.log(id)
   let product = {};
    axios.get('https://ar-medicare-backend.herokuapp.com/api/admin/products/'+id).then((response) => {
          console.log(response.data);
          product = response.data;
          setTitle(product.title);
          setPrice(product.price);
          setQuantity(product.quantity);
          setDesc(product.desc);
          setImgUrl(product.img);

    setDesc(product.description);
    }).catch((err) => {console.log(err)});

    

  }

    React.useEffect(handleData,[]);

  return (
    <Box
      sx={{
        marginTop: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingLeft:20,
        paddingRight:20
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <ManageAccountsIcon />
      </Avatar>
      <Typography component="h1" variant="h4">
      Update Product
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12}>
            <TextField
              onChange={(e) => {
                setTitle(e.target.value);
                console.log(e.target.value);
              }}
              id="title"
              label="Product Title"
              name="title"
              autoComplete="Product"
              variant="standard"
              fullWidth
              error={titleErr}
              value={title}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              onChange={(e) => setPrice(e.target.value)}
              id="price"
              label="Price"
              name="price"
              autoComplete="0"
              variant="standard"
              type="number"
              fullWidth
              error={priceErr}
              value={price}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              onChange={(e) => setQuantity(e.target.value)}
              id="quantity"
              label="quantity"
              name="quantity"
              autoComplete="0"
              variant="standard"
              type="number"
              fullWidth
              error={quantityErr}
              value={quantity}
            />
          </Grid>

        

          <Grid item xs={7} sm={7}>
            <TextField
              onChange={(e) => setDesc(e.target.value)}
              id="desc"
              label="Description"
              name="desc"
              autoComplete="This a Product"
              variant="filled"
              multiline
              rows={7}
              fullWidth
              value={desc}
            />
          </Grid>
          <Grid item xs={5} sm={5}>
      <Card >
        <CardMedia
          component="img"
          height="190"
          image={imgUrl}
          alt="Not available"
        />
        </Card>
        </Grid>

          <Grid item xs={12} sm={12}>
          <FileUploader
                  placeholder={image ? image : "Click here to upload"}
                  accept={["image/jpeg", "image/png", "image/bmp"]}
                  maxFiles={1}
                  maxSize={1000000}
                  onDrop={(acceptedFiles, rejectedFiles) =>
                    onDrop(acceptedFiles, rejectedFiles, "frontSideImage")
                  }
                  error = {imageErr}
                />
          </Grid>
          

         

          <Grid item xs={3} sm={3}>
            <Button color="primary" fullWidth variant="contained" type="submit">
              Update
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default UpdateProduct;
