import React from 'react'
import Sidebar from './../../components/category/Sidebar'
import CategoryProducts from '../../components/category/CategoryProducts'
import { useParams } from 'react-router-dom'
import {useStyles} from './../../styles/categoryPage/style'


function Category() {
  const{categoryId}=useParams()
  const classes=useStyles()
  return (
    
    <div className={classes.container}>
      <Sidebar/>
     

      <CategoryProducts  id={categoryId}/>
        
    </div>
    
   
  )
}

export {Category}


