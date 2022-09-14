import React,{useState,useEffect,useCallback} from 'react'

import {TableRow,TableCell} from '@mui/material'
import { digitsEnToFa } from "@persian-tools/persian-tools";
function Row({product,data,setData,editpr,setEditpr,editqu,setEDitqu}) {
  
  
  const [price,setPrice]=useState(product.price)
  const[quantity,setQuantity]=useState(product.quantity)
  const handleChange=(e,id)=>{
    if (e.target.name==='price'){setPrice(e.target.value)};
    if(e.target.name==='quantity'){
      setQuantity(e.target.value)
    }

   const d= data.find(item=>item.id===id)
   if (d){
    d[e.target.name]=Number(e.target.value)
   }
   else{
    const object={id:id}
    object[e.target.name]=Number(e.target.value)
    
    setData([...data,object])
   }
   
  
  } 
  const toggle=useCallback((event)=>{
    if (event.key==='Escape'){
      setEditpr(false)
      setEDitqu(false)
    }
  },[setEDitqu, setEditpr] )
  useEffect(() => {
    document.addEventListener("keydown", toggle);

    return () => {
      document.removeEventListener("keydown",toggle );
    }
  }, [price, quantity, toggle]);
  return (
    <>
     <TableRow >
       
        <TableCell align='center' >{product.name}</TableCell>
        <TableCell align='center' >{product.model}</TableCell>
        {editpr ? <TableCell align='center'><input type='number' name='price' onChange={(e)=>handleChange(e,product.id)} defaultValue={price}/></TableCell>
        :<TableCell align='center'  onClick={()=>setEditpr(true) }  >{digitsEnToFa(price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))}</TableCell>
  }
        {editqu? <TableCell align='center' ><input type='number' name='quantity' defaultValue={quantity} onChange={(e)=>handleChange(e,product.id)}/></TableCell>
        :<TableCell align='center' onClick={()=>setEDitqu(true)}   >{digitsEnToFa(quantity)}</TableCell>
        }
        
       
      </TableRow>
      </>
  )
}

export default Row
