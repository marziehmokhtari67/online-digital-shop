import React from 'react'
import {Outlet} from 'react-router-dom'
import Box from '@mui/material/Box'
function SharedCustomerLayout() {
  return (
    <>
     <Box
      sx={{
        width: 1,
        height:1/5,
        backgroundColor:'#f3e5f5', 
        border:'1px solid black',
        padding:'30px',
        textAlign:'center',
       
      }}
    >
      SharedCustomerLayout
    </Box>
      {/* <NavBar></NavBar> */}
      <Outlet/>
    </>
  )
}

export default SharedCustomerLayout
