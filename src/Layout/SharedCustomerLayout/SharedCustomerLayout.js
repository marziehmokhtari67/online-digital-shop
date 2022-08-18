import React from 'react'
import {Outlet} from 'react-router-dom'
import CustomerNavbar from '../../Component/CustomerNavbar'
function SharedCustomerLayout() {
  return (
    <>
     
     <CustomerNavbar/>
  
      <Outlet/>
    </>
  )
}

export  {SharedCustomerLayout}
