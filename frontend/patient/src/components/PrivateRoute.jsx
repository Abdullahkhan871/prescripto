import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children, token, route }) => {
    console.log(route)
    return token ? children : <Navigate to={route} />
}

export default PrivateRoute