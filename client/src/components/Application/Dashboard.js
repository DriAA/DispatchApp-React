import React, { useEffect, useState } from "react"
import { Card, Row, Col } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import {useHistory } from "react-router-dom"
import NavigationBar from '../NavigationBar'


// Dashboard
import DashboardCard from '../DashboardCard/DashboardCard'
import RevenueCard from '../RevenueCard/RevenueCard'
import NotificationSet from '../Notifications/NotificationSet/NotificationSet'
import LoadSet from "../Loads/LoadSet/LoadSet"
import DriverSet from '../Drivers/DriverSet/DriverSet'



// Data 
import loadsDataSet from '../../sampleData/loads'
import driverDataSet from "../../sampleData/driver"


export default function Dashboard(props) {



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
        
        <div className="px-5 py-5 card" style={{overflow:'hidden'}}>
            <h3>Dashboard</h3>

            <Row>
            <Col lg={6}>
                    <DashboardCard Title='Recent Loads' link='/app/loads' overflow={'scroll'}>
                        <LoadSet loads={loadsDataSet}/>
                    </DashboardCard>
                </Col>
                <Col>
                    <DashboardCard Title='Revenue' link='/app/financials'>
                        <RevenueCard amount={1000} drivers={[{name:'alberto', amount:1000},{name:'Carl', amount:2514}]}/>
                    </DashboardCard>
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <DashboardCard Title='Drivers On a Load' link='/app/drivers'>
                        <DriverSet drivers={driverDataSet}/>
                    </DashboardCard>
                </Col>
                <Col>
                    <DashboardCard Title='Notifications' link='/notifications'>
                        <NotificationSet/>
                    </DashboardCard>
                </Col>
            </Row>




        </div>





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
