import React from 'react'

import {TableRow,TableCell} from '@mui/material'
import { digitsEnToFa } from "@persian-tools/persian-tools";
function Row({post}) {
  return (
    <>
     <TableRow>
       
        <TableCell align='center' >{post.name}</TableCell>
        <TableCell align='center' >{post.model}</TableCell>
        <TableCell align='center' >{digitsEnToFa(post.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))}</TableCell>
        <TableCell align='center' >{digitsEnToFa(post.quantity)}</TableCell>
       
      </TableRow>
      </>
  )
}

export default Row
