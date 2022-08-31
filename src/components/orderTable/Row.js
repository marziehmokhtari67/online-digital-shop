import * as React from 'react';
import {TableRow,TableCell,Button} from '@mui/material'
import { digitsEnToFa } from "@persian-tools/persian-tools";

import OrderModal from './Modal'


function Row({order,number}) {
const [open, setOpen] =React.useState(false)
const handleOpen = () => {setOpen(true)
};
const handleClose = () => setOpen(false);
  return (
    <>
    <TableRow>
   <TableCell align='center'>{order.username} {order.lastname}</TableCell>
   <TableCell align='center' >{ 
 digitsEnToFa(order.prices.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))}</TableCell>
   <TableCell align='center' >{new Date(order.createdAt).toLocaleDateString('fa-IR')}</TableCell>
   <TableCell align='center' ><Button variant='outlined'onClick={handleOpen}  >بررسی سفارش</Button></TableCell>
   
   </TableRow>{
    open && <OrderModal handleClose={handleClose} open={open} order={order}  number={number}/>
   }
   
    </>
  )
}



export default Row
