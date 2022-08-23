import React from 'react'

import {TableRow,TableCell} from '@mui/material'
function Row({post}) {
  return (
    <>
     <TableRow>
       
        <TableCell align='center' >{post.name}</TableCell>
        <TableCell align='center' >{post.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
        <TableCell align='center' >{post.quantity.toString()}</TableCell>
       
      </TableRow>
      </>
  )
}

export default Row
