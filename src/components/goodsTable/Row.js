import React from 'react'
import { useStyles } from '../../styles/table/style'
import {TableRow,TableCell,Button,Avatar} from '@mui/material'
import {URL} from './../../API/constant'
import DeletModal from './DeletModal'
import EditModal from './EditModal'
function Row({post,categories}) {
const classes=useStyles()
const [open, setOpen] =React.useState(false)
const handleOpen = () => setOpen(true)
const handleClose = () => setOpen(false);

  return (
    <>
    <TableRow >
   
        <TableCell align='center'><Avatar alt="image" src={`${URL}/files/${post.thumbnail}`} variant='rounded'/></TableCell>

        <TableCell align='center' >{post.name}</TableCell>
        <TableCell align='center' >{post.model}</TableCell>
        <TableCell align='center' >{categories.find(category=>category.id===post.category).name}</TableCell>
        <TableCell align='center' className={classes.buttonsContainer}>
        <Button variant='outlined'onClick={handleOpen}>ویرایش</Button>
        <EditModal open={open} handleClose={handleClose}/>
        {/*  */}
        <Button variant='outlined'sx={{mx:2}} onClick={handleOpen}>حذف</Button>
        <DeletModal open={open} handleClolse={handleClose} postId={post.id}/>
        </TableCell>
      </TableRow>
      
    </>
  )
}

export default Row
