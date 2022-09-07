import React from "react";
import { Typography, Grid, Box, Button } from "@mui/material";
import {DateInput} from "react-hichestan-datetimepicker";
import { useFormik } from "formik";
import{schema} from './../../yup/schema'
import {useDispatch,useSelector} from 'react-redux'
import {saveUserInfo} from './../../redux/reducer/cartSlice'
import { useNavigate } from "react-router-dom";
import Modal from '@mui/material/Modal';
function FinalizePayment() {
  const inputStyle = {
    fontFamily: "Vazir-Medium",
    padding: "5px",
    margin: "5px 0px",
    width: "80%",
  };
  
  const dispatch=useDispatch()
  const {userInfo}=useSelector(state=>state.cart)
  const navigate=useNavigate()
  //handle payment function
  const handlePayment=(data)=>{
    
    dispatch(saveUserInfo(data))
    // const d= data.expextAt.replace( " " , "T" ).replace( "/" , "-" ) ;
    
    console.log(userInfo)
    navigate('/paymentGatetWay')
    
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

  return (
    <Box sx={{ padding: "30px" }}>
      <Typography variant="h5" align="right" sx={{ marginBottom: "20px" }}>
        نهایی کردن خرید
      </Typography>
      <form onSubmit={handleSubmit}  id='form'>
        <Grid container>
          <Grid item md={6} xs={12}>
            <Typography>نام:</Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography>نام خانوادگی:</Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <input style={inputStyle} type="text" name="username" value={values.username} onChange={handleChange}/>
            {errors.username&& <Typography sx={{color:'red'}}>{errors.username}</Typography>}
          </Grid>
          <Grid item md={6} xs={12}>
            <input style={inputStyle} name="lastname" type="text" value={values.lastname} onChange={handleChange} />
            {errors.lastname&& <Typography sx={{color:'red'}}>{errors.lastname}</Typography>}
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography>آدرس:</Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography>تلفن همراه:</Typography>
          
          </Grid>
          <Grid item md={6} xs={12}>
            <input  style={inputStyle} type="text" name="address" value={values.address} onChange={handleChange} />
              {errors.address&& <Typography sx={{color:'red'}}>{errors.address}</Typography>}
          </Grid>
          <Grid item md={6} xs={12}>
            <input  style={inputStyle} type="text" name="phone" value={values.phone} onChange={handleChange} />
            {errors.phone&&<Typography sx={{color:'red'}}>{errors.phone}</Typography>}
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography>تاریخ تحویل:</Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <DateInput name={'expectAt'} value={values.expectAt} onChange={handleChange} />
            {errors.expectAt && <Typography sx={{color:'red'}}>{errors.expectAt}</Typography>}
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
