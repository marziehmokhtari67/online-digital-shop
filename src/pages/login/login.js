import React from "react";
import * as yup from 'yup'
import { Box, Typography, Button, Link, TextField } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLogin } from "./../../redux/reducer/loginSlice";
import { useStyles } from "./../../styles/login/style";

function Login() {
  
    
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [erors,setErors] = useState([])
  // 
  const dispatch = useDispatch();
  const classes = useStyles();
  const { isLogined ,error} = useSelector((state) => state.login);
  // 
  const schema = yup.object().shape({
    username: yup.string().required('نام کاربری الزامی است').min(2),
    password: yup.string().required().min(1),
})
const validate = async()=>{
  try {
     await schema.isValid({username:username,password:password} ,{
      abortEarly: false
      
    })
    
  } catch (err) {
    
    console.log(erors)
  }
}
  const handleSubmit = async (e) => {
    e.preventDefault();
    await validate()
    dispatch(fetchLogin({ username, password }));
    isLogined ? navigate("/managment") : navigate("/login");
  };
  return (
    <>
      <Box className={classes.container}>
        <Typography variant="h6" className={classes.header}>
          ورود به پنل مدیریت دیجیتال لند
        </Typography>
        <Box component="div" className={classes.formContainer}>
          {error && <Typography sx={{color:'rgb(231, 135, 189)'}}>نام کاربری یا رمز اشتباه است</Typography>}
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: "25px" }}
          >
            <Box className={classes.input}>
              <AccountCircle sx={{ mr: 1, ml: 1, my: 0.5 }} />
              <TextField
                label="نام کاربری"
                name='username'
                variant="standard"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Box>
            <Box className={classes.input}>
              <LockIcon sx={{ mr: 1, ml: 1, my: 0.5 }} />
              <TextField
                type="password"
                name='password'
                label="رمز عبور"
                variant="standard"
                color="primary"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
            <Button className={classes.btn}
              variant="contained"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              ورود
            </Button>
          </Box>
          <Link href="/" sx={{textDecoration:'none',fontFamily:'Vazir-Medium'}}>
            بازگشت به سایت
          </Link>
        </Box>
      </Box>
    </>
  );
}

export { Login };
