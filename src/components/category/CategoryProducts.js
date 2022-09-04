
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {URL} from './../../API/constant'
import Card from './Card'
import {Grid} from '@mui/material'
import{useSearchParams} from 'react-router-dom'
function CategoryProducts({id,page}) {
  const[caprdt,setCaprdt]=useState([])
  const[searchParams,setSearchParams]=useSearchParams()
  
  
  function getProducts() {
    axios.get(`${URL}/products?category=${id}&_page=${page}&_limit=4&_page=${page}`)
      .then((res) => setCaprdt(res.data))  
  }


  useEffect(()=>getProducts(),[id,page])
  return (
    <Grid container>
      {caprdt.map(element=>{return<Grid item  md={6} xs={12} key={element.id} sx={{display:'flex'}}>
        <Card  product={element}/></Grid>})}
      
    </Grid>
  )
}

export default CategoryProducts
