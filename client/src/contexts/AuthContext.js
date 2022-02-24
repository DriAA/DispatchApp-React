import React, { useContext, useState } from "react"
import { getData } from "../api/fetchSignupApi"
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

    let data =  await getData(user)
    setCurrentUser(data.user)
    return data
  }

  function login(email, password) {
    return (email, password)
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
