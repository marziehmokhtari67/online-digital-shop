import * as React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Badge, Tooltip, Box, Toolbar,Typography,IconButton ,Link,AppBar} from "@mui/material";
import logo from "./../assest/logo1.png";

function CustomerNavbar() {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{  backgroundImage: `linear-gradient(to right, #c6ffdd, #fbd786, #f7797d 120%)`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',padding: "0px 40px" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <Box
              component="img"
              src={logo}
              alt="logo"
              sx={{ width: "25%", borderRadius: "10px" }}
            />
            <Typography variant="h4" sx={{fontFamily:'title',color:'black'}}>دیجیتال لند</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <Link
              href="login"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                textDecoration: "none",
                color:'#4527a0'
              }}
            >
              <PersonOutlineOutlinedIcon/>
              <Typography sx={{fontFamily:'iran'}}  >مدیریت</Typography>
            </Link>
            <Link href="cart">
              <Badge
                badgeContent={0}
                color='primary'
                showZero
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                  
                }}
                sx={{color:'#4527a0'}}
              >
                <ShoppingCartOutlinedIcon  />
              </Badge>
            </Link>
            <Tooltip title="میزان رضایت‌‌ مندی شما" >
              <IconButton >
              <FavoriteBorderOutlinedIcon color="primary" sx={{color:'#4527a0'}}/>
              </IconButton>
            
              </Tooltip> 
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default CustomerNavbar;


