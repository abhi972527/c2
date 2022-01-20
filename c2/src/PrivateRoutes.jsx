import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const PrivateRoutes = ({children}) => {

    const {user}  = useSelector(state => state.authState)

    if(user[0] === null || user.length === 0) {
        return <Navigate to="/login" />
    }
    if(user[0] !== "admin") {
    alert("Unauthorised Access")
    return <Navigate to="/" />
    }


    return children

}
