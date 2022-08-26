import React from 'react'
import {Modal,Box, IconButton,Typography,Button} from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel';
import {useStyles} from './../../styles/modals/orderModal/style'
import {fetchDelet,fetchPosts} from './../../redux/reducer/postSlice'
import {useDispatch} from 'react-redux'
function DeletModal({open,handleClolse,postId}) {
const classes=useStyles()
const dispatch = useDispatch()
const handleDelet= (id) => {
  dispatch(fetchDelet(id))
  dispatch(fetchPosts())
}
  return (
    <Modal
    open={open}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
      <Box className={classes.container}>
      <Box className={classes.header}>
      <IconButton onClick={handleClolse} color={'primary'}><CancelIcon/></IconButton>
      </Box>
      <Typography>کالای مورد نظر از لیست کالا حذف شود؟</Typography>
      <Box>
        <Button onClick={()=>handleDelet(postId)}>بله</Button>
        <Button onClick={handleClolse}>خیر</Button>
      </Box>
      </Box>
    </Modal>
  )
}

export default DeletModal
