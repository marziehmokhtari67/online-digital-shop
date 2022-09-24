import React from 'react'
import Sidebar from './../../components/category/Sidebar'
import CategoryProducts from '../../components/category/CategoryProducts'
import { useParams } from 'react-router-dom'
import{useSelector} from 'react-redux'
import Card from './../../components/category/Card'
import {Grid} from '@mui/material'
function Category() {
  const{categoryId}=useParams()
  const {searchResult,products}=useSelector(state=>state.products)
 console.log(searchResult)
  return (
    
    <div style={{display:'flex',padding:'20px 40px',gap:'100px'}}>
      <Sidebar/>
     

      <CategoryProducts  id={categoryId}/>
        
    </div>
    
   
  )
}

export {Category}


