
import React,{useState,useEffect,useCallback} from 'react'
import axios from 'axios'
import {URL} from './../../API/constant'
import Card from './Card'
import {Grid,Box} from '@mui/material'
import{useSearchParams} from 'react-router-dom'
import {Pagination} from '@mui/material'
import {useStyles} from './../../styles/categoryPage/style'
function CategoryProducts({id}) {
  const[catprdt,setCatprdt]=useState([])
  const[totalCount,setTotalCount]=useState(0)
  const[search,setSearch]=useSearchParams()
  const [page,setPage]=useState(1)
  const classes=useStyles()
  const handleChange = (event, value) => {
    setPage(value);
    
  };
  
  const getProducts=useCallback((page)=> {
    
    axios.get(`${URL}/products?category=${id}&_page=${page}&_limit=4`)
      .then((res) =>{setCatprdt(res.data)
        setTotalCount(res.headers["x-total-count"])
        setSearch({page:page}) 
      })

       
  },[id, setSearch])


  useEffect(()=>getProducts(page),[getProducts, id, page, search])
  return (
    <Box className={classes.cardsContainer}>
    <Grid container>
      {catprdt.map(element=>{return<Grid item  md={6} xs={12} key={element.id} >
        <Card  product={element}/></Grid>})}
      
    </Grid>
    
     <Pagination  count={Number(Math.ceil(totalCount/4))} page={page} onChange={handleChange}  shape="circular"
     color='secondary' variant='outlined' className={classes.pagination} />
    
     </Box>
  )
}

export default CategoryProducts
