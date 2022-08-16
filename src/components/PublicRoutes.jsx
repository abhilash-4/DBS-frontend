import React from "react";
import {  Outlet, useNavigate } from 'react-router-dom'


const useAuth=()=>{
    const user=localStorage.getItem('user')
    if(user){
      return true
    } else {
      return false
    }
}
  
const PublicRoutes = (props) => {
  const navigate = useNavigate();

    const auth = useAuth()
    
    return auth ? navigate("/") : <Outlet/>
}
  
export default PublicRoutes;