import React from 'react'

import {Grid, Typography,Box} from '@mui/material'
import { useDispatch ,useSelector} from 'react-redux';
import Card from './../../components/category/Card'
import {useParams} from 'react-router-dom'
import { fetchSearch } from '../../redux/reducer/productSlice';
function SearchResult() {
const {products}=useSelector(state=>state.products)
const dispatch=useDispatch()
const {keyword} =useParams()
React.useEffect(()=> {dispatch(fetchSearch({keyword}))},[dispatch, keyword])

  return (
    
    <Box p={4}>
      <Typography variant='h4' sx={{borderBottom:'3px solid rgb(249,225,229)'}}>کالاها</Typography>
   {products.length> 0 ?
   <Grid container mt={4} spacing={2}>
   {products.map(product=>(<Grid item  md={4} xs={12} key={product.id} >
        <Card  product={product}/></Grid>))}
        </Grid>
    :<Box mt={4}>
  <Typography variant='h6' align='center'>متاسفانه جستجو با شرایط فعلی نتیجه‌ای نداشت. لطفا موارد جستجو شده را بازنگری کنید</Typography>
        </Box>
   
        } 
      </Box> 
  
  )
}

export {SearchResult}
