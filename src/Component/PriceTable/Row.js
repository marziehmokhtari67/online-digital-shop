import React from 'react'

import {TableRow,TableCell} from '@mui/material'
function Row({post}) {
  return (
    <>
     <TableRow>
        {console.log(post)}
        <TableCell align='right' sx={{fontFamily:'iran'}}>{post.name}</TableCell>
        <TableCell align='right' sx={{fontFamily:'iran'}}>{post.price}</TableCell>
        <TableCell align='right' sx={{fontFamily:'iran'}}>{post.quantity}</TableCell>
       
      </TableRow>
      </>
  )
}

export default Row
