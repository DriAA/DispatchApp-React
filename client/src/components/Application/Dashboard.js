import React, { useEffect, useState } from "react"
import { Card, Row, Col } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import {useHistory } from "react-router-dom"
import NavigationBar from '../NavigationBar'
import { faDollar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


export default function Dashboard() {

  const DollarElement = <FontAwesomeIcon  style={{fontSize:'2em'}} icon={faDollar} />


  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const [loading, setLoading] = useState(true)
  const history = useHistory()


  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2 ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],

  };

  ChartJS.register(ArcElement, Tooltip, Legend);


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
        
        <div className="bg-light px-5 py-5 card" style={{overflow:'hidden'}}>
            <h3> Dashboard </h3>
            <Row xs={1} sm={2}  xl={4} className="g-4">
                <Col className='p-3'>
                  <Card className="p-3">
                    <div className="mb-4">{DollarElement}</div>
                    <div className="lead" style={{fontSize:'1em'}}>Total Loads Completed</div>
                    <h2 className="mb-3 border-bottom pb-4">0001</h2>
                    <p className="text-muted" style={{fontSize:'1em'}}>Started on 03/02-3/07</p>
                  </Card>
                </Col>
                <Col className='p-3'>
                <Card className="p-3">
                    <div className="mb-4">{DollarElement}</div>
                    <div className="lead" style={{fontSize:'1em'}}>Total Loads Completed</div>
                    <h2 className="mb-3 border-bottom pb-4">0001</h2>
                    <p className="text-muted" style={{fontSize:'1em'}}>Started on 03/02-3/07</p>
                  </Card>
                </Col>
                <Col className='p-3'>
                <Card className="p-3">
                    <div className="mb-4">{DollarElement}</div>
                    <div className="lead" style={{fontSize:'1em'}}>Total Loads Completed</div>
                    <h2 className="mb-3 border-bottom pb-4">0001</h2>
                    <p className="text-muted" style={{fontSize:'1em'}}>Started on 03/02-3/07</p>
                  </Card>
                </Col>
                <Col className='p-3'>
                <Card className="p-3">
                    <div className="mb-4">{DollarElement}</div>
                    <div className="lead" style={{fontSize:'1em'}}>Total Loads Completed</div>
                    <h2 className="mb-3 border-bottom pb-4">0001</h2>
                    <p className="text-muted" style={{fontSize:'1em'}}>Started on 03/02-3/07</p>
                  </Card>
                </Col>
            </Row>

            <Row className="g-4">
              <Col sm={6} md={8}  className="p-3 h-100">
                <Card className="p-3"  style={{height:'50vh', overflow:'hidden'}}>
                  <div>
                  <Row className="text-center border-bottom pb-2">
                    <Col>NO</Col>
                    <Col xs={3}>Trip</Col>
                    <Col>Status</Col>
                    <Col>Rate</Col>
                    <Col>Driver</Col>
                  </Row>                    
                  </div>
                  <div className="p-3" style={{height:'45vh', overflowY:'scroll', overflowX:'hidden'}}>
                  <Card className="my-3">
                    <Row className="text-center">
                      <Col className="m-auto">1</Col>
                      <Col className="m-auto" xs={3}>
                        West Palm Beach, FL <br/>
                        Miami, FL 
                      </Col>
                      <Col className="m-auto">Active</Col>
                      <Col className="m-auto">$3211.50</Col>
                      <Col className="m-auto">Albert</Col>
                    </Row>
                  </Card>
                  <Card className="my-3">
                    <Row className="text-center">
                      <Col className="m-auto">1</Col>
                      <Col className="m-auto" xs={3}>
                        West Palm Beach, FL <br/>
                        Miami, FL 
                      </Col>
                      <Col className="m-auto">Active</Col>
                      <Col className="m-auto">$3211.50</Col>
                      <Col className="m-auto">Albert</Col>
                    </Row>
                  </Card>
                  <Card className="my-3">
                    <Row className="text-center">
                      <Col className="m-auto">1</Col>
                      <Col className="m-auto" xs={3}>
                        West Palm Beach, FL <br/>
                        Miami, FL 
                      </Col>
                      <Col className="m-auto">Active</Col>
                      <Col className="m-auto">$3211.50</Col>
                      <Col className="m-auto">Albert</Col>
                    </Row>
                  </Card>
                  <Card className="my-3">
                    <Row className="text-center">
                      <Col className="m-auto">1</Col>
                      <Col className="m-auto" xs={3}>
                        West Palm Beach, FL <br/>
                        Miami, FL 
                      </Col>
                      <Col className="m-auto">Active</Col>
                      <Col className="m-auto">$3211.50</Col>
                      <Col className="m-auto">Albert</Col>
                    </Row>
                  </Card>
                  <Card className="my-3">
                    <Row className="text-center">
                      <Col className="m-auto">1</Col>
                      <Col className="m-auto" xs={3}>
                        West Palm Beach, FL <br/>
                        Miami, FL 
                      </Col>
                      <Col className="m-auto">Active</Col>
                      <Col className="m-auto">$3211.50</Col>
                      <Col className="m-auto">Albert</Col>
                    </Row>
                  </Card>
                  <Card className="my-3">
                    <Row className="text-center">
                      <Col className="m-auto">1</Col>
                      <Col className="m-auto" xs={3}>
                        West Palm Beach, FL <br/>
                        Miami, FL 
                      </Col>
                      <Col className="m-auto">Active</Col>
                      <Col className="m-auto">$3211.50</Col>
                      <Col className="m-auto">Albert</Col>
                    </Row>
                  </Card>
                  <Card className="my-3">
                    <Row className="text-center">
                      <Col className="m-auto">1</Col>
                      <Col className="m-auto" xs={3}>
                        West Palm Beach, FL <br/>
                        Miami, FL 
                      </Col>
                      <Col className="m-auto">Active</Col>
                      <Col className="m-auto">$3211.50</Col>
                      <Col className="m-auto">Albert</Col>
                    </Row>
                  </Card>
                  <Card className="my-3">
                    <Row className="text-center">
                      <Col className="m-auto">1</Col>
                      <Col className="m-auto" xs={3}>
                        West Palm Beach, FL <br/>
                        Miami, FL 
                      </Col>
                      <Col className="m-auto">Active</Col>
                      <Col className="m-auto">$3211.50</Col>
                      <Col className="m-auto">Albert</Col>
                    </Row>
                  </Card>                    
                  </div>
                </Card>
              </Col>
              <Col  className="p-3 ">
                <Card  className="p-3 m-auto h-100"  style={{height:'55vh', overflow:'hidden'}}>
                  <Doughnut className="w-50 h-100 m-auto" data={data} />
                  <ul style={{overflowY:'scroll'}}>
                    <li>Driver One</li>
                    <li>Driver Two</li>
                    <li>Driver Three</li>
                    <li>Driver Four</li>
                    <li>Driver Five</li>

                  </ul>
                </Card>
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
