import React from 'react'
import{Outlet} from 'react-router-dom'
import Box from '@mui/material/Box'
function SharedManagmentLayout() {
  return (
    <>
    <Box
      sx={{
        width: 1,
        height:1/5,
        backgroundColor:'#e3f2fd', 
        border:'1px solid black',
        padding:'30px',
        textAlign:'center',
       
      }}
    >
 SharedManagmentLayout
    </Box>
   
      {/* <Navbar></Navbar> */}
      <Outlet/>
    </>
  )
}

export default SharedManagmentLayout
