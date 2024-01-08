import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({children}) => {
    if(localStorage.getItem("token")){
  return (
    <>
      {children}
    </>
  )
}
else{
    return(
        <>
        {alert("Please Login To Visit Home Page")}
        <Navigate to='/login'/>
        </>
    )
}
}
export default ProtectedRoutes

