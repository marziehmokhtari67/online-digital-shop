import React from 'react'
import Sidebar from './../../components/category/Sidebar'
import CategoryProducts from '../../components/category/CategoryProducts'
import { useParams } from 'react-router-dom'


function Category() {
  const{categoryId}=useParams()
  
 
  return (
    <>
    <div style={{display:'flex',padding:'20px 40px',gap:'100px'}}>
      <Sidebar/>
      <CategoryProducts  id={categoryId}/>
    
    </div>
    
    </> 
  )
}

export {Category}


