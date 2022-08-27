import React from 'react'
import {Modal,Box, IconButton,Typography,Button} from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel';
import {useStyles} from './../../styles/modals/style'
import {fetchDelet,fetchPosts} from './../../redux/reducer/productSlice'
import {useDispatch} from 'react-redux'

function EditModal({open,handleClolse}) {
  const classes=useStyles()
const dispatch = useDispatch()
  return (
    <>
    <Modal
    open={open}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
      <Box className={classes.container}>
      <Box className={classes.header}>
        <Typography>افزودن/ویرایش</Typography>
      <IconButton onClick={handleClolse} color={'primary'}><CancelIcon/></IconButton>
      </Box>
      
      <Box>
       
      </Box>
      </Box>
    </Modal>
      
    </>
  )
}

export default EditModal
