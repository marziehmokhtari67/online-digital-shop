import React from 'react'
import { useStyles } from '../../styles/table/style'
import {TableRow,TableCell,Button,Avatar} from '@mui/material'
import {URL} from './../../API/constant'
function Row({post,categories}) {
const classes=useStyles()
  return (
    <>
    <TableRow >
   
        <TableCell align='center'><Avatar alt="image" src={`${URL}/files/${post.thumbnail}`} variant='rounded'/></TableCell>

        <TableCell align='center' >{post.name}</TableCell>
        <TableCell align='center' >{post.model}</TableCell>
        <TableCell align='center' >{categories.find(category=>category.id===post.category).name}</TableCell>
        <TableCell align='center' className={classes.buttonsContainer}><Button variant='outlined'>ویرایش</Button><Button variant='outlined'sx={{mx:2}} >حذف</Button></TableCell>
      </TableRow>
      
    </>
  )
}

export default Row
// toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')