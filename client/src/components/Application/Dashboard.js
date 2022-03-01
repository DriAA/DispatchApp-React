import React, { useEffect, useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import NavigationBar from '../NavigationBar'

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const [loading, setLoading] = useState(true)
  const history = useHistory()



  useEffect(()=>{
    if(currentUser){
      setLoading(false)
      console.log("User Found!")
    }else{
      console.log('No user Found yet')
    }
  },[currentUser])

  async function handleLogout() {
    setError("")
    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }


  function handleDashboard(){
    if(loading){
      return(
        <>
          <Card>
            <Card.Body>
              <h2 className="text-center">Loading ...</h2>
            </Card.Body>
          </Card>
        </>
      )
    }else{
      return(
        <>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Profile:</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>User:{currentUser.email}</strong>
            <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
              Update Profile
            </Link>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          <Button variant="link" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
      </>
      )
    }
  }


  return (
    <>
    <NavigationBar links={[{link:'/app/loads', title:'Loads'},{link:'/app/drivers', title:'Drivers'},{link:'/app/financials',title:'Financials'},{link:'/app/notifications', title:'Notifications'}]} authActive={true}/>
    {handleDashboard()}
    </>
  )
}