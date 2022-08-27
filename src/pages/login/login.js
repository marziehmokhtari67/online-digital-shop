import React from "react";
import { Box, Typography, Button, Link, TextField } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from "react-router-dom";
import img from "./../../assets/images/img9.jpg";
import {useState} from "react"
import {useDispatch} from 'react-redux'
import {fetchLogin} from './../../redux/reducer/loginSlice'
function Login() {
  const navigate = useNavigate();
  const [username,setUsername]=useState('')
  const [password,setPassword] =useState('')
  const dispatch=useDispatch()
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(fetchLogin({username,password}))
    navigate("/managment")
  }
  return (
    <>
      <Box
        component="div"
        sx={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100vw",
          height: "100vh",
          backgroundColor: "pink",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "iran",
          
        }}
      >
        <Box
          component="div"
          sx={{
            position: "static",
            zIndex: "55",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            padding: "10px 0px",
            alignItems: "center",
            width: "35%",
            height: "50%",
            backgroundColor: "rgba(0,0,0,0.6)",
            borderRadius: "10px",
            color: "rgba(255,255,255,0.8)",
          }}
        >
          <Typography variant="h6" fontFamily="iran" sx={{textAlign:'center'}}>
            ورود به پنل مدیریت دیجیتال لند
          </Typography>
          <Box
            component="form" 
            sx={{ display: "flex", flexDirection: "column", gap: "25px" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <AccountCircle sx={{ mr: 1,ml:1, my: 0.5 }} />
              <TextField label="نام کاربری" variant="standard" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <LockIcon sx={{ mr: 1,ml:1, my: 0.5 }} />
              <TextField
              type='password'
                label="رمز عبور"
                variant="standard"
                color="secondary"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </Box>
            <Button
              variant="contained"
              type='submit'
              sx={{
                fontFamily: "iran",
                color: "rgba(255,255,255,0.8)",
                backgroundColor:'#42a5f5',
              }}
              onClick={(e) =>handleSubmit(e) }
            >
              ورود
            </Button>
          </Box>
          <Link href="/" sx={{ fontFamily: "iran", textDecoration: "none", }}>
            بازگشت به سایت
          </Link>
        </Box>
      </Box>
    </>
  );
}

export  {Login}
