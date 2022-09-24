import React, { useEffect,useState,useCallback } from "react";
import { Link, Box, Typography,Grid,Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "./../../redux/reducer/categorySlice";
import axios from 'axios'
import {URL} from './../../API/constant'
import Card from './../../components/category/Card'
import Loading from './../../components/loading/Loading '

function Home() {
  const dispatch = useDispatch();
  const { categories,loading } = useSelector((state) => state.category);
  console.log();
  const[products,setProducts]=useState([])
  const getData= useCallback((id)=> {
    axios.get(`${URL}/products?category=${id}&_page=1&_limit=6`)
      .then((res) => setProducts(prevState=>[...prevState,...res.data]))
      
  },[products])

  console.log(products);
  useEffect(() => {
    dispatch(fetchCategory()).unwrap().then(res=>res.map(r=> getData(r.id)))
    // categories.map(category=>console.log(category))
    
    
  }, []);
  
  return (loading? <Loading/>
    :<Box 
      sx={{
      p:4,
      display:'flex',
      flexDirection:'column',

      
      }}
    >
      {categories.map((category,index) =>{return( 
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
          {products?.filter((product) => product.category === category.id)
            .map((product) => {
              return  <Grid item  md={4} xs={12} key={product.id} sx={{display:'flex',justifyContent:'center'}}><Card  product={product}/></Grid>
            })}
            </Grid>
            
           
            
        </div>
      )})}
    </Box>
  );
}


export { Home };
