import React from "react"

import {Outlet, useNavigate} from "react-router-dom"

const useAuth = () => {

	//get item from localstorage
	const user = JSON.parse(localStorage.getItem("user"));
	const otpStatus = localStorage.getItem("otpStatus")

	
	if (user && otpStatus === "approved") {
		return {
			auth: true,
			role: user.roles[0],			
		}
	} else {
		return {
			auth: false,
			role: null,
		}
		
		
	}
}

const ProtectedRoutes = (props) => {


	const navigate = useNavigate();
	const {auth, role} = useAuth()

	//if the role required is there or not
	if (props.roleRequired) {
		return auth ? (
			props.roleRequired === role ? (
				<Outlet />
			) : (
				navigate('/error')
			 
			)
		) : (
			navigate('/login')
		)
	} else {
		return auth ? <Outlet /> : navigate('/home');
	
	}
}

export default ProtectedRoutes
