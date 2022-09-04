import React,{useState} from 'react'
import Sidebar from './../../components/category/Sidebar'
import CategoryProducts from '../../components/category/CategoryProducts'
import { useParams } from 'react-router-dom'
import {Pagination} from '@mui/material'

function Category() {
  const{categoryId}=useParams()
  const [page,setPage]=useState(0)
  const handleChange = (event, value) => {
    setPage(value);
  };
 
  return (
    <>
    <div style={{display:'flex',padding:'20px 40px',gap:'100px'}}>
      <Sidebar/>
      <CategoryProducts  page={page} id={categoryId}/>
    
    </div>
     <Pagination  count={2} page={page} onChange={handleChange}  shape="rounded"
     color='primary' />
    </> 
  )
}

export {Category}


