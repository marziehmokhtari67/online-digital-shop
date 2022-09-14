import React from "react";
import { Typography, Grid, Box, Button} from "@mui/material";
import {DateInput} from "react-hichestan-datetimepicker";
import { useFormik } from "formik";
import{schema} from './../../yup/schema'
import '../../index.css'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'



function FinalizePayment() {
  //style
  const inputStyle = {
    fontFamily: "Vazir-Medium",
    padding: "5px",
    margin: "5px 0px",
    width: "80%",
  };
  //variable
  const navigate=useNavigate()
  const{cartItems}=useSelector(state=>state.cart)
  //handle payment function
  const handlePayment=async(data)=>{
    
  localStorage.setItem("userInfo",JSON.stringify({...data,expectAt: new Date(data.expectAt)})) 
  window.open('http://localhost:3001/paymentGateWay','_blank')
    //  navigate('//localhost:3001/paymentGateWay')
    
  }
 
  // formik
  const {values,handleChange,errors,handleSubmit}=useFormik({
    initialValues:{
      username:'',
      lastname:'',
      address:'',
      phone:'',
      expectAt:'',
    },
  
    validationSchema:schema,
      
      onSubmit: values => {
        handlePayment(values)
      },
    
  })

  return cartItems.length===0 ? (<Box sx={{display:'flex',justifyContent:'center'}}><Typography sx={{margin:'40px 0'}}>سبد خرید خالی است لطفا محصولی رو جهت خرید انتخاب کنید</Typography></Box>
  ):(
    <Box sx={{ padding: "30px" }}>
      <Typography variant="h5" align="right" sx={{ marginBottom: "20px" }}>
        نهایی کردن خرید
      </Typography>
      <form onSubmit={handleSubmit}  id='form'>
        <Grid container>
          <Grid item md={6} xs={12} >
            <Box sx={{height:'0.2vh',marginBottom:'5px'}}>
            <Typography>نام:</Typography>
            <input style={inputStyle} type="text" name="username" value={values.username} onChange={handleChange}/>
            {errors.username&& <Typography sx={{color:'red'}}>{errors.username}</Typography>}
            </Box>
          </Grid>
          
          <Grid item md={6} xs={12} >
            <Box sx={{height:'15vh',marginBottom:'5px'}}>
            <Typography>نام خانوادگی:</Typography>
            <input style={inputStyle} name="lastname" type="text" value={values.lastname} onChange={handleChange} />
            {errors.lastname&& <Typography sx={{color:'red'}}>{errors.lastname}</Typography>}
            </Box>
          </Grid>
          <Grid item md={6} xs={12} >
          <Box sx={{height:'15vh',marginBottom:'5px'}}>
            <Typography>آدرس:</Typography>
            <input  style={inputStyle} type="text" name="address" value={values.address} onChange={handleChange} />
              {errors.address&& <Typography sx={{color:'red'}}>{errors.address}</Typography>}
            </Box>
          </Grid>
          <Grid item md={6} xs={12} >
          <Box sx={{height:'15vh',marginBottom:'5px'}}>
            <Typography>تلفن همراه:</Typography>
              <input  style={inputStyle} type="text" name="phone" value={values.phone} onChange={handleChange} />
            {errors.phone&&<Typography sx={{color:'red'}}>{errors.phone}</Typography>}
          </Box>
          </Grid>
          
          <Grid item md={4.5} xs={12} >
          <Box sx={{height:'15vh',marginBottom:'5px'}}>
            <Typography>تاریخ تحویل:</Typography>
            <DateInput name={'expectAt'} value={values.expectAt}  className='class'   onChange={handleChange} />
            {errors.expectAt && <Typography sx={{color:'red'}}>{errors.expectAt}</Typography>}
            </Box>
            </Grid>
          
        </Grid>
        
        <Box sx={{ display: "flex" }}>
          
          <Button 
          id='btn'
          type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#00c853",
              width: "25%",
              margin: "30px auto",
            }}
          >
            پرداخت
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export { FinalizePayment };
