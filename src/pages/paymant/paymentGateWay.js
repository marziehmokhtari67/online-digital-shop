// import React from 'react'
// import { Typography,Button,Box } from '@mui/material';
// import{useSelector} from 'react-redux'
// import{useNavigate} from 'react-router-dom'
// import dargah from './../../assets/images/dargah.png'

// function PaymentGateWay() {
//   const {userInfo}=useSelector(state=>state.cart)
//   const navigate=useNavigate()
  
  
//   return (
//     <Box sx={{padding:'10px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
//        <Typography variant='h6' align='center'>درگاه پرداخت اینترنتی </Typography>
//        <Box component='img' src={dargah} sx={{width:'500px', height:'500px'}} ></Box>
//     <Box sx={{position:'relative',bottom:'100px',zIndex:'2',display:'flex', gap:'10px'}}>
//     <Button variant='contained'color={'success'} onClick={()=> navigate('/result/success')}>پرداخت</Button>
//       <Button variant='contained' color={'warning'} onClick={()=> navigate('/failed')}>انصراف</Button>
//     </Box>
//     </Box>
    
//   )
// }

// export  {PaymentGateWay}
