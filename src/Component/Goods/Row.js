import React from 'react'

import {TableRow,TableCell,Button,Avatar} from '@mui/material'

const URL='http://localhost:3001'
function Row({post,category}) {

  return (
    <>
    <TableRow>
   
        <TableCell align='right' sx={{fontFamily:'iran'}}><Avatar alt="image" src={`${URL}/files/${post.thumbnail}`} /></TableCell>
        <TableCell align='right' sx={{fontFamily:'iran'}}>{post.name}</TableCell>
        <TableCell align='right' sx={{fontFamily:'iran'}}>{post.category}</TableCell>
        <TableCell align='right' ><Button variant='outlined' sx={{fontFamily:'iran'}}>ویرایش</Button><Button variant='outlined' sx={{fontFamily:'iran'}}>حذف</Button></TableCell>
      </TableRow>
      
    </>
  )
}

export default Row
