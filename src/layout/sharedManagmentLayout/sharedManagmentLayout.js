import React from 'react'
import{Outlet} from 'react-router-dom'
import ManagmentNavbar from '../../components/navbar/ManagmentNavbar'
function SharedManagmentLayout() {
  return (
    <>
    <ManagmentNavbar/>
      <Outlet/>
    </>
  )
}

export  {SharedManagmentLayout}
