import React from 'react'
import{Outlet} from 'react-router-dom'
import ManagmentNavbar from './../../Component/ManagmentNavbar'
function SharedManagmentLayout() {
  return (
    <>
    <ManagmentNavbar/>
      <Outlet/>
    </>
  )
}

export  {SharedManagmentLayout}
