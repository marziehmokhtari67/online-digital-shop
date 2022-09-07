import * as React from "react";
import { AppBar,Box,Toolbar,Typography,Menu,IconButton,MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ToggleButton, Link, ToggleButtonGroup, Container} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {useStyles} from './../../styles/navbar/managmentNavbar/style'

function ManagmentNavbar() {
  const pages = ["کالاها", "موجودی و قیمت ها", "سفارش ها"];
  const addres=["goods","inventoryPrices",""]
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [alignment, setAlignment] = React.useState("web");
  const navigate=useNavigate()
 const classes=useStyles()
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <>
      <AppBar className={classes.appbar} position='static'>
        <Container maxWidth="xl">
          <Toolbar className={classes.toolbar}
            disableGutters={true}
          >
            <Typography
              variant="h5"
              noWrap
              className={classes.name}
            >
              پنل مدیریت دیجیتال لند
            </Typography>
            <Box className={classes.menuContainer} >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu className={classes.menu}
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page,index) => (
                  <MenuItem key={page} onClick={()=>{handleCloseNavMenu();navigate(addres[index])}}>
                    <Typography textAlign="center" >{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography className={classes.name1}
              variant="h6"
              noWrap
              flexGrow= {1}
            >
              پنل مدیریت دیجیتال لند
            </Typography>
            <ToggleButtonGroup 
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
              
              sx={{display:{xs:'none',md:'flex',direction:'ltr'}}}
            >
              <ToggleButton value="kala"  onClick={()=>navigate('goods')}>کالاها</ToggleButton>
              <ToggleButton value=" gheimatha"  onClick={()=>navigate('inventoryPrices')}>موجودی و قیمت ها</ToggleButton>
              <ToggleButton value="sefareshha" onClick={()=>navigate('')}>سفارش ها</ToggleButton>
            </ToggleButtonGroup>
            <Box sx={{ flexGrow: 0,}}>
              <Link sx={{fontFamily:"Vazir-Medium" ,fontSize:'14px'}} href='/' >بازگشت به سایت</Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default ManagmentNavbar;


