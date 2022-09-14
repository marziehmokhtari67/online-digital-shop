import React, { useEffect,useState } from "react";
import { Link, Box, Typography,Grid,Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "./../../redux/reducer/categorySlice";
import axios from 'axios'
import {URL} from './../../API/constant'
import Card from './../../components/category/Card'

function Home() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const[products,setProducts]=useState([])
  function getData() {
    axios.get(`${URL}/products`)
      .then((res) => setProducts(res.data))
      
  }
  useEffect(() => {
    dispatch(fetchCategory())
    getData()
    
  }, [dispatch]);
  
  return (
    <Box 
      sx={{
      p:4,
      display:'flex',
      flexDirection:'column',
     
      
      }}
    >
      {categories.map((category) =>{return( 
        <div key={category.id} >
          <Box sx={{display:'flex',gap:'5px',alignItems:'center',py:2,px:5, my:2,borderBottom:'3px solid rgb(249,225,229)'}}>
          <Avatar src={`${URL}/files/${category.icon}` } variant='rounded' alt='icon'/><Link
            href={`category/${category.id}`}
            underline='none'
          >
            <Typography variant="h5">{category.name}</Typography>
          </Link>
          </Box>
         
          
           <Grid container  spacing={2}>
          {products.filter((product) => product.category === category.id).slice(0,6)
            .map((product) => {
              return  <Grid item  md={4} xs={6} key={product.id} sx={{display:'flex',justifyContent:'center'}}><Card  product={product}/></Grid>
            })}
            </Grid>
            
           
            
        </div>
      )})}
    </Box>
  );
}

export { Home };
