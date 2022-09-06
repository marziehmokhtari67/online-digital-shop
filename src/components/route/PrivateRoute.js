import React from 'react'
import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'


function PrivateRoute({children}) {
    const {isLogined}=useSelector(state=>state.login)
  return (isLogined ?<>{children}</> :<Navigate to ='/login'/>)
}

export default PrivateRoute


