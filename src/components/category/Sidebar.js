import React,{useEffect,useState} from 'react'
import{fetchCategory} from './../../redux/reducer/categorySlice'
import{useDispatch,useSelector} from 'react-redux'
import {Link,Box,Typography} from '@mui/material'
import axios from 'axios'
import {URL} from './../../API/constant'
function Sidebar() {
  const dispatch=useDispatch()
  const {categories}=useSelector(state=>state.category)
  const [subcategory,setSubcategory]=useState([])
  function getsubCategory() {
    axios.get(`${URL}/subcategory`)
      .then((res) => setSubcategory(res.data))
      
  }
  useEffect(()=>{dispatch(fetchCategory())
  getsubCategory()}
  ,[dispatch])
  return (
    <Box sx={{width:'30%',marginTop:'20px'}}>
     {categories.map((category)=>{return (<Box key={category.id}>
    <Link href={`/category/${category.id}`}><Typography>{category.name}</Typography></Link>
 {subcategory.filter(item=>item.category===category.id).map(element=>
  {return (
    <Typography key={element.id}>{element.name}</Typography>
  )

  }
  )}
</Box>
)})}
    </Box>
  )
}

export default Sidebar
