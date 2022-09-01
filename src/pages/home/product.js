import React, { useEffect, useState } from "react";
import { Typography, Box,Button } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import { URL } from "./../../API/constant";
import {useNavigate} from 'react-router-dom'
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { makeStyles } from '@mui/styles'
function Product() {
  const [info, setInfo] = useState([]);
  const navigate=useNavigate()
  const { productId } = useParams()
  const useStyles=makeStyles({
    container:{display:'flex',flexDirection:'column',gap:'10px',alignItems:'center',justifyContent:'center'},
    img:{
      margin:'10px',
      border:'1px solid rgba(0,0,0 ,0.4)',
      borderRadius:'10px',
      transitionDuration:'ease-in',
      '&:hover':{
      
      
        cursor:'pointer',
        transform: 'scale(1.01)',
    
      },
    },
    filed:{
      margin:'10px',
      display:'flex',
      gap:'10px',
      
    }
   
   
   
    
  })
  const ID=Number(productId)
  const classes=useStyles()
 const getData=async()=>{
  const res = await axios.get(`${URL}/products/${ID}`)
  await setInfo(res.data)
  console.log(info)
 
 }
  
  useEffect(() => getData() 
  , []);
 
  return (
    <>
<div className={classes.containet}>
  <img alt='aks'src={`${URL}/files/${{...info}.thumbnail}`} className={classes.img}/>
  <Typography>نام: {{...info}.name}</Typography>
  <Typography>قیمت: {{...info}.price}</Typography>
  <Typography> مدل: {{...info}.model}</Typography>
  <Typography> رنگ:{{...info}.color}</Typography>
  <Typography> توضیحات:{{...info}.description}</Typography>
  <div className={classes.filed}>
    <input type='number'/>
    <Button variant='contained' onClick={()=>navigate("/cart")}>افزودن به سبد خرید</Button>
  </div>
  {/* replace(/(<([^>]+)>)/gi, "") */}
 
</div>
    </>
  );
}

export { Product };
