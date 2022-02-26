import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()
  console.log("current User from Private Route: ", currentUser)
  console.log("In Local Sotrage:     ",JSON.parse(localStorage.getItem('user')))
  return (
    <Route
      {...rest}
      render={props => {
        return JSON.parse(localStorage.getItem('user')) ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}
