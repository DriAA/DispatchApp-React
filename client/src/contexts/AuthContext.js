import React, { useContext, useState } from "react"
import { getSignup, getLogin } from "../api/fetchSignupApi"
const AuthContext = React.createContext()




export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()

  async function signup(username, email, password) {

    let user = {
      username: username,
      email: email,
      password: password
    }

    let data =  await getSignup(user)
    console.log("Signup API: ", data)
    setCurrentUser(data.response)
    return data
  }

  async function login(username, password) {
    let user = {
      username: username,
      password: password
    }
    let data =  await getLogin(user)
    console.log("Login API: ", data)
    setCurrentUser(data.response)
    return data
  }

  function logout() {
    return 'logged out'
  }



  const value = {
    currentUser,
    login,
    signup,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
