import * as React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import  FavoriteIcon from "@mui/icons-material/Favorite";
import  MenuIcon from "@mui/icons-material/Menu";
import{useSelector} from 'react-redux'
import {
  Badge,
  Tooltip,
  Box,
  Toolbar,
  Typography,
  ToggleButton,
  MenuItem,
  Menu,
  AppBar,
  IconButton
} from "@mui/material";
import logo from "./../../assets/logo/logo1.png";
import {NavLink} from 'react-router-dom'
import SearchBar from './SearchBar'
import { useStyles } from "./../../styles/navbar/customerNavbar/style";
import { useState } from "react";
function CustomerNavbar() {
  const classes = useStyles();
  const [selected, setSelected] = useState(false);
  const{cartItems}=useSelector(state=>state.cart)
  const {isLogined}=useSelector(state=>state.login)
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Box >
      <AppBar position="relative" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Box className={classes.rightBox}>
            <Box className={classes.nameBox}>
            <Box
              className={classes.logoBox}
              component="img"
              src={logo}
              alt="logo"
            />
            <NavLink to='/' style={{textDecoration:'none'}} ><Typography variant="h5" className={classes.name}>
         دیجیتالند
            </Typography>
            </NavLink>
            </Box>
            <Box className={classes.menu}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon color={'primary'} />
            </IconButton >
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              
            >
                <MenuItem>
                {isLogined? <NavLink to="/managment"  className={classes.leftBoxLink} >
              <PersonOutlineOutlinedIcon />
              <Typography>مدیریت</Typography>
            </NavLink> : <NavLink to="/login"  className={classes.leftBoxLink} >
              <PersonOutlineOutlinedIcon />
              <Typography>مدیریت</Typography>
            </NavLink>}   
                </MenuItem>
                <MenuItem >
                <NavLink to="/cart">
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
            </NavLink>
                </MenuItem>
                <MenuItem>
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
            </MenuItem> 
            </Menu>
            </Box>
            
          </Box>
        <SearchBar/>
          <Box className={classes.leftBox}>
         {isLogined? <NavLink to="/managment"  className={classes.leftBoxLink} >
              <PersonOutlineOutlinedIcon />
              <Typography>مدیریت</Typography>
            </NavLink> : <NavLink to="/login"  className={classes.leftBoxLink} >
              <PersonOutlineOutlinedIcon />
              <Typography>مدیریت</Typography>
            </NavLink>}   
            <NavLink to="/cart">
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
            </NavLink>
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
