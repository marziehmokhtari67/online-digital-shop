import React from 'react'
import {TableRow,TableCell,Button} from '@mui/material'
function Row({order}) {
  return (
    <>
    <TableRow>
   <TableCell align='center'>{order.username} {order.lastname}</TableCell>
   <TableCell align='center' >{ 
 order.prices.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
   <TableCell align='center' >{new Date(order.createdAt).toLocaleDateString('fa-IR')}</TableCell>
   <TableCell align='center' ><Button variant='outlined' >بررسی سفارش</Button></TableCell>
   </TableRow>
    </>
  )
}



export default Row
