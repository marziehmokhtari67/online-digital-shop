import React,{useEffect,useState} from 'react'
import { Typography,Box } from '@mui/material';
import {useParams} from 'react-router-dom'
import axios from 'axios';

import {URL} from './../../API/constant'
import { getType } from '@reduxjs/toolkit';
function Product() {
const [product,setProduct]=useState([])
const params=useParams(null)
  const Id  =params.productId
  
  function getData(Id) {
    axios.get(`${URL}/products?id=${Id}`)
      .then((res) => setProduct(res.data))
      
  }

useEffect(()=>{getData()},[Id])

  return (
    <>
       <Typography variant='h4' align='center'>اطلاعات محصول </Typography>
       <Box>
        {/* <Box component='img' src={`${URL}/files/${product.image[0]}`} /> */}
       </Box>
    </>

  )
}

export {Product} 
