import * as React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import  FavoriteIcon from "@mui/icons-material/Favorite";
import{useSelector} from 'react-redux'
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {
  Badge,
  Tooltip,
  Box,
  Toolbar,
  Typography,
  ToggleButton,

  AppBar,
  
} from "@mui/material";
import logo from "./../../assets/logo/logo1.png";
import {Link} from 'react-router-dom'
import SearchBar from './SearchBar'
import { useStyles } from "./../../styles/navbar/customerNavbar/style";
import { useState } from "react";
function CustomerNavbar() {
  const classes = useStyles();
  const [selected, setSelected] = useState(false);
  const{cartItems}=useSelector(state=>state.cart)
  const {isLogined}=useSelector(state=>state.login)
  return (
    <Box>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Box className={classes.rightBox}>
            <Box
              className={classes.logoBox}
              component="img"
              src={logo}
              alt="logo"
            />
            <Link to='/' ><Typography variant="h5" className={classes.name}>
            
         دیجیتالند
            </Typography>
            </Link>
          </Box>
        <SearchBar/>
          <Box className={classes.leftBox}>
         {isLogined? <Link to="/managment"  className={classes.leftBoxLink} >
              <PersonOutlineOutlinedIcon />
              <Typography>مدیریت</Typography>
            </Link> : <Link to="/login"  className={classes.leftBoxLink} >
              <PersonOutlineOutlinedIcon />
              <Typography>مدیریت</Typography>
            </Link>}   
            <Link to="/cart">
              <Badge
                badgeContent={cartItems.length}
                color="secondary"
                showZero
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <ShoppingCartOutlinedIcon color={"primary"} />
              </Badge>
            </Link>
            <Tooltip title="میزان رضایت‌‌ مندی شما">
            <ToggleButton
                value="check"
                selected={selected}
                onChange={() => {
                setSelected(!selected);
                }}
                color={"secondary"}
                sx={{border:'none'}}
              >
                <FavoriteIcon   />
              </ToggleButton>
            </Tooltip> 
           
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default CustomerNavbar;
