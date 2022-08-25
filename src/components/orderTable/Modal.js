import React from 'react'
import {Modal,Box, IconButton,Typography,TableContainer,TableHead,Table,TableBody,TableRow,TableCell,Link,Button} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { digitsEnToFa } from "@persian-tools/persian-tools";
import {useStyles} from './../../styles/modals/orderModal/style'
import { changeDelivered } from './../../redux/reducer/orderSlice'
import {useDispatch} from 'react-redux'
import {useState} from 'react'

function Moodal({handleClose,open,order}) {
  const classes=useStyles()
  const dispatch = useDispatch()
  const [disable,setDisable]=useState(false)
  const handleChange=(id)=>{
    dispatch( changeDelivered(id))
    setDisable(true)
  }
  return (  
  <Modal
  open={open}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box className={classes.container}>
      <Box className={classes.header}>
      <Typography variant='h6' >نمایش سفارش</Typography>
      <IconButton onClick={handleClose} color={'primary'}><CancelIcon/></IconButton>
      </Box>
      <Box >
        <Typography sx={{fontSize:'14px'}}>نام مشتری:{order.username} {order.lastname}</Typography>
        <Typography sx={{fontSize:'14px'}}>آدرس: {order.address}</Typography>
        <Typography sx={{fontSize:'14px'}}>تلفن: {digitsEnToFa(order.phone)}</Typography>
        <Typography sx={{fontSize:'14px'}}>زمان تحویل: {new Date(order.expectAt).toLocaleDateString('fa-IR')}</Typography>
        <Typography sx={{fontSize:'14px'}}>زمان سفارش: {new Date(order.createdAt).toLocaleDateString('fa-IR')}</Typography>
      </Box>
      <TableContainer >
        <Table className={classes.table}>
          <TableHead>
            <TableRow  sx={{background:'#eee1f3'}}>
              <TableCell  align='center'>کالا</TableCell>
              <TableCell align='center'>قیمت</TableCell>
              <TableCell align='center'>تعداد</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
           {order.products.map((product)=>
            <TableRow key={product.id}>
            <TableCell align='center'><Link href={`/product/${product.id}`}>{product.name}</Link></TableCell>
            <TableCell align='center'>{digitsEnToFa(product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))}</TableCell>
            <TableCell align='center'>{digitsEnToFa(product.count)}</TableCell>
          </TableRow>
            )} 
          </TableBody>
        </Table>
      </TableContainer>
      <Box component='div'>
        {console.log(order.delivered)}
      {order.delivered ? ( <Typography sx={{fontSize:'14px'}}>زمان تحویل:{new Date(order.createdAt).toLocaleDateString('fa-IR')}</Typography> )
      : ( <Button variant='outlined' onClick={()=>handleChange(order.id)} disabled={disable}>تحویل داده شد</Button> )   }
    </Box>
  </Box>
  </Modal>
    
  )
}

export default Moodal
