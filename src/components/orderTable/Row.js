import React from 'react'
import {TableRow,TableCell,Button} from '@mui/material'
function Row({order}) {
  return (
    <>
    <TableRow>
   <TableCell align='right' sx={{fontFamily:'iran'}}>{order.username} {order.lastname}</TableCell>
   <TableCell align='right' sx={{fontFamily:'iran'}}>{order.prices}</TableCell>
   <TableCell align='right' >{new Date(order.createdAt).toLocaleDateString('fa-IR')}</TableCell>
   <TableCell align='right' ><Button variant='outlined' sx={{fontFamily:'iran'}}>بررسی سفارش</Button></TableCell>
   </TableRow>
    </>
  )
}



export default Row
