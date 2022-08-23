import * as React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Badge, Tooltip, Box, Toolbar,Typography,IconButton ,Link,AppBar} from "@mui/material";
import logo from "./../../assets/logo/logo1.png";

import {useStyles} from './../../styles/navbar/customerNavbar/style'
function CustomerNavbar() {
  const classes = useStyles()
  return (
    <Box>
      <AppBar
        position="static" className={classes.appbar} 
      >
        <Toolbar className={classes.toolbar}>
          <Box className={classes.rightBox}>
            <Box className={classes.logoBox}
              component="img"
              src={logo}
              alt="logo"
            />
            <Typography variant="h4"className={classes.name}>دیجیتال لند</Typography>
          </Box>
          <Box className={classes.leftBox} >
           
            <Link
              href="login"
              className={classes.leftBoxLink}
            >
              <PersonOutlineOutlinedIcon/>
              <Typography >مدیریت</Typography>
            </Link>
            <Link href="cart">
              <Badge
                badgeContent={0}
                color='warning'
                showZero
                anchorOrigin={{
                vertical: "top",
                horizontal: "left",
                  
                }}
                
              >
                <ShoppingCartOutlinedIcon sx={{color:'#4527a0'}} />
              </Badge>
            </Link>
            <Tooltip title="میزان رضایت‌‌ مندی شما" >
              <IconButton >
              <FavoriteBorderOutlinedIcon />
              </IconButton>
            
              </Tooltip> 
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default CustomerNavbar;


