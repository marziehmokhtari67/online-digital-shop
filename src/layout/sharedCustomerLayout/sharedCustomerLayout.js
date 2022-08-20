import React from 'react'
import {Outlet} from 'react-router-dom'
import CustomerNavbar from '../../components/navbar/CustomerNavbar'
function SharedCustomerLayout() {
  return (
    <>
     
     <CustomerNavbar/>
  
      <Outlet/>
    </>
  )
}

export  {SharedCustomerLayout}
