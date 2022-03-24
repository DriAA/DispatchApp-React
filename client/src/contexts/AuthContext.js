import React, { useContext, useEffect, useState } from "react"
import { getSignup, getLogin, getDriver } from "../api/fetchSignupApi"
const AuthContext = React.createContext()




export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()


  useEffect(()=>{
    setCurrentUser(JSON.parse(localStorage.getItem('user')))      
  },[])
  
  async function signup(username, email, password) {

    let user = {
      username: username,
      email: email,
      password: password
    }

    let data =  await getSignup(user)
    console.log("Signup API: ", data)
    if(data.status === 'Success'){
      localStorage.setItem('user', JSON.stringify(data.user))
      setCurrentUser(JSON.parse(localStorage.getItem('user')))      
    }
    return data
  }


  async function assignUser(){
    await setCurrentUser(JSON.parse(localStorage.getItem('user')))      
    return currentUser
  }
  




  async function login(username, password) {
    let user = {
      username: username,
      password: password
    }
    let data =  await getLogin(user)
    console.log("Login API: ", data)
    if(data.status === 'Success'){
      localStorage.setItem('user', JSON.stringify(data.user))
      setCurrentUser(JSON.parse(localStorage.getItem('user')))      
    }
    return data
  }

  async function addDriver(driver){
    console.log("Adding Driver...")
    let data = await getDriver(driver)
    if(data.status === 'Success'){
      localStorage.setItem('user', JSON.stringify(data.user))
      setCurrentUser(JSON.parse(localStorage.getItem('user')))      
    }
    return data
  }





  function logout() {
    setCurrentUser()
    localStorage.setItem('user',null)
    return 'logged out'
  }



  const value = {
    currentUser,
    login,
    signup,
    logout,
    assignUser
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
