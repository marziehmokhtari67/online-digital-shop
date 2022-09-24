import React from 'react'
import {URL} from './../../API/constant'
import {Box,Typography,Paper } from '@mui/material'
import {useNavigate} from 'react-router-dom'
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { makeStyles } from '@mui/styles'

const useStyles=makeStyles({
  card:{border:'3px solid rgb(249,225,229)',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  flexDirection:'column',
  width:'300px',
  height:'300px',
  paddingTop:'10px',
  borderRadius:'10px',
  background:'white',
  transitionDuration:'ease-in',
  
  '&:hover':{
    
    
    cursor:'pointer',
    transform: 'scale(1.02)',

  },
 
  margin:'10px 5px'},
  
img:{
  width:'55%',height:'60%',
  
},
textContainer:{
  backgroundColor:'rgb(252,241,237)',
  padding:'10px',
  width:'100%',
  height:'40%',
  borderRadius:'5px',
 

}
  
})
function Card({product}) {
  const navigate=useNavigate()
  const classes=useStyles()
  return (
    <Box onClick={()=>navigate(`/product/${product.id}`)} className={classes.card} >
    <Box component='img'src={`${URL}/files/${product.image[0]}`} alt="productImage" className={classes.img}  />

    <Box className={classes.textContainer}>
    <Typography align='center' >{product.name} {product.model}</Typography>
    <Typography align='center' >قیمت:{  digitsEnToFa(product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) } تومان</Typography>
    </Box>
   
    </Box>
    
  )
}

export default Card
