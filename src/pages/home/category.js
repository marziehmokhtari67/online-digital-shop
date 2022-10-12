import React from 'react'
import Sidebar from './../../components/category/Sidebar'
import CategoryProducts from '../../components/category/CategoryProducts'
import { useParams } from 'react-router-dom'
import {useStyles} from './../../styles/categoryPage/style'
import DrawerSideBar from '../../components/category/DrawerSideBar'


function Category() {
  const{categoryId}=useParams()
  const classes=useStyles()
  return (
    
    <div className={classes.container}>
      <Sidebar/>
     <DrawerSideBar/>

      <CategoryProducts  id={categoryId}/>
        
    </div>
    
   
  )
}

export {Category}


