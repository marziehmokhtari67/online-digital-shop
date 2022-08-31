import React from 'react'

import {TableRow,TableCell} from '@mui/material'
import { digitsEnToFa } from "@persian-tools/persian-tools";
function Row({product}) {
  return (
    <>
     <TableRow>
       
        <TableCell align='center' >{product.name}</TableCell>
        <TableCell align='center' >{product.model}</TableCell>
        <TableCell align='center' >{digitsEnToFa(product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))}</TableCell>
        <TableCell align='center' >{digitsEnToFa(product.quantity)}</TableCell>
       
      </TableRow>
      </>
  )
}

export default Row
