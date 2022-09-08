
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {URL} from './../../API/constant'
import Card from './Card'
import {Grid,Box} from '@mui/material'
import{useSearchParams} from 'react-router-dom'
import {Pagination} from '@mui/material'
function CategoryProducts({id}) {
  const[catprdt,setCatprdt]=useState([])
  const[search,setSearch]=useSearchParams()
  const [page,setPage]=useState(1)
  const handleChange = (event, value) => {
    setPage(value);
    
  };
  
  function getProducts(page) {
    axios.get(`${URL}/products?category=${id}&_page=${page}&_limit=4&`)
      .then((res) => {setCatprdt(res.data)
        setSearch({page:page}) 
      })

       
  }


  useEffect(()=>getProducts(page),[id, page, search])
  return (
    <Box style={{display:'flex',flexDirection:'column'}}>
    <Grid container>
      {catprdt.map(element=>{return<Grid item  md={6} xs={12} key={element.id} sx={{display:'flex'}}>
        <Card  product={element}/></Grid>})}
      
    </Grid>
     <Pagination  count={2} page={page} onChange={handleChange}  shape="rounded"
     color='primary' />
     </Box>
  )
}

export default CategoryProducts
