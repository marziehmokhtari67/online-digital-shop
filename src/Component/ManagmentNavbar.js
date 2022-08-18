import * as React from "react";
import { AppBar,Box,Toolbar,Typography,Menu,IconButton,MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ToggleButton, Link, ToggleButtonGroup, Container} from "@mui/material";
import { useNavigate } from "react-router-dom";


function ManagmentNavbar() {


  const pages = ["کالاها", "موجودی و قیمت ها", "سفارش ها"];
  const addres=["goods","inventoryPrices",""]
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [alignment, setAlignment] = React.useState("web");
  const navigate=useNavigate()
 
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
      <AppBar position="static">
        <Container maxWidth="xl" sx={{backgroundImage:`linear-gradient(to right, #c6ffdd, #fbd786, #f7797d 120%)`}}>
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "space-between", }}
          >
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "title",
                fontWeight: 500,
                color: "black",
                letterSpacing:'0.15rem'
              }}
            >
              پنل مدیریت دیجیتال لند
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              <Menu
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
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page,index) => (
                  <MenuItem key={page} onClick={()=>{handleCloseNavMenu();navigate(addres[index])}}>
                    <Typography textAlign="center" sx={{fontFamily:'iran'}}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "title",
                fontWeight: 700,
                color: "black",
              }}
            >
              پنل مدیریت دیجیتال لند
            </Typography>
            <ToggleButtonGroup
              color="secondary"
              value={alignment}
              exclusive
              onChange={handleChange}
              sx={{display:{xs:'none',md:'flex'},gap:'10px',borderLefttColor:'rgba(0,0,0,0.2)'} }
            >
              <ToggleButton value="web" sx={{fontFamily:'iran',border:'none'}} onClick={()=>navigate('goods')} variant='containd'>کالاها</ToggleButton>
              <ToggleButton value=" android" sx={{fontFamily:'iran',border:'none'}} onClick={()=>navigate('inventoryPrices')}>موجودی و قیمت ها</ToggleButton>
              <ToggleButton value="ios" sx={{fontFamily:'iran',border:'none'}} onClick={()=>navigate('')}>سفارش ها</ToggleButton>
            </ToggleButtonGroup>
            <Box sx={{ flexGrow: 0,}}>
              <Link href='/' sx={{ fontFamily: "iran" ,color:'black',cursor:'pointer',textDecoration:'none'}}>بازگشت به سایت</Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default ManagmentNavbar;


