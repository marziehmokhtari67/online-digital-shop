import React,{useEffect,useState} from 'react'
import{fetchCategory} from './../../redux/reducer/categorySlice'
import{useDispatch,useSelector} from 'react-redux'
import {Box,Typography} from '@mui/material'
import {NavLink} from 'react-router-dom'
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
    <Box sx={{width:'25%',padding:'40px 20px 0px',borderLeft:'5px solid #ba68c8'}}>
     {categories.map((category)=>{return (<Box key={category.id}>
    <NavLink to={`/category/${category.id}`}
    style={({ isActive }) => ({ 
      textDecoration:'none',
      color: isActive ? '#d81159' : 'blue' })}>
    <Typography variant='h6'>{category.name}
    
    </Typography></NavLink>
   
 {subcategory.filter(item=>item.category===category.id).map(element=>
  {return ( 
     <Typography key={element.id}  >{element.name}</Typography>
  
  )

  }
  )}
  

</Box>
)})}
    </Box>
  )
}

export default Sidebar
