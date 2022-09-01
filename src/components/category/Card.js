import React from 'react'
import {URL} from './../../API/constant'
import {Box,Typography } from '@mui/material'
import {useNavigate} from 'react-router-dom'
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { makeStyles } from '@mui/styles'

const useStyles=makeStyles({
  card:{border:'1px solid rgba(0,0,0,0.3)',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  flexDirection:'column',
  width:'300px',
  height:'300px',
  padding:'10px',
  transitionDuration:'ease-in-out',
  '&:hover':{
    
    
    cursor:'pointer',
    transform: 'scale(1.01)',

  },
 
  margin:'10px 5px'},
  
img:{
  width:'80%',height:'60%'
}
  
})
function Card({product}) {
  const navigate=useNavigate()
  const classes=useStyles()
  return (
    <Box onClick={()=>navigate(`product/${product.id}`)} className={classes.card}>
    <img src={`${URL}/files/${product.image[0]}`} alt="productImage" className={classes.img} />
    <Typography>{product.name} {product.model}</Typography>
    <Typography>قیمت:{digitsEnToFa(product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))}</Typography>
    </Box>
    
  )
}

export default Card
