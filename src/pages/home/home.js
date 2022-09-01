import React, { useEffect,useState } from "react";
import { Link, Box, Typography,Grid } from "@mui/material";
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
      alignItems:'center',
      }}
    >
      {categories.map((category) =>{return( 
        <div key={category.id}>
          <Link
            href={`category/${category.id}`}
            sx={{ textDecoration: "none" }}
          >
            <Typography variant="h5">{category.name}</Typography>
          </Link>
          
           <Grid container>
          {products.filter((product) => product.category === category.id).slice(0,7)
            .map((product) => {
              return  <Grid item  md={4} xs={6} key={product.id} sx={{display:'flex'}}><Card  product={product}/></Grid>
            })}
            </Grid>
            
           
            
        </div>
      )})}
    </Box>
  );
}

export { Home };
