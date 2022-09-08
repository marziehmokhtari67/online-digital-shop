import React,{useEffect,useCallback} from 'react'
import { Typography,Box } from '@mui/material';
import {addOrders} from './../../redux/reducer/orderSlice'
import {useParams} from 'react-router-dom'
import {getTotals} from './../../redux/reducer/cartSlice'
import {useDispatch,useSelector} from 'react-redux'

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
// ///////////////////////////////////////////////////////////////////////////
function ResultOfPayment() {
 const {result}=useParams()
 const dispatch=useDispatch()
 
 const clientData=JSON.parse(localStorage.getItem('userInfo'))
 clientData.delivered=false
 const orders=JSON.parse(localStorage.getItem('cartItems'))
 clientData.products=orders
 let { total, quantity } = orders.reduce(
  (cartTotal, cartItem) => {
    const { price, cartQuantity } = cartItem;
    const itemTotal = price * cartQuantity;
    cartTotal.total += itemTotal;
    cartTotal.quantity += cartQuantity;
    return cartTotal;
  })
clientData.prices=total
 const handleResult=useCallback(()=>{
  if(result==='success'){
 
 

dispatch(addOrders(clientData))

  


  }
  
 },[result, dispatch, clientData])
  useEffect(()=>handleResult(),[result])
  return (result==='success'?<Box sx={{display:'flex',justifyContent:'center',gap:'10px',marginTop:'20px'}}>
  <CheckCircleIcon color={'success'}/>
  <Typography>باتشکر از پرداخت شما سفارش شما ثبت شد جهت هماهنگی ارسال با  شما تماس گرفته خواهد شد</Typography>
  </Box>:<Box sx={{display:'flex',marginTop:'20px',justifyContent:'center',gap:'10px',marginTop:'20px'}}>
  <CancelIcon color={'warning'}/>
  <Typography>پرداخت موفقیت امیز نبود سفارش شما در انتظار پرداخت است</Typography>
  </Box>
    
  )
}

export  {ResultOfPayment}
