import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { UserContext } from "./UserContext"

export const ProtectedRoute = ({component: Component, ...rest}) => {
    const { login } = useContext(UserContext);

    return (
        <Route {...rest} render={
            (props) => {
                if (login) {
                    return <Component {...props}/>
                } else {
                    return <Redirect to={{pathname: "/signin", state: { from: props.location }}} />
                }
            }
        }/>
    )
}