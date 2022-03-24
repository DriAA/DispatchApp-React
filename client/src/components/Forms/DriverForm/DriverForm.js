import React, {useEffect, useRef, useState} from "react";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";
import NavigationBar from "../../NavigationBar";
import { useAuth } from "../../../contexts/AuthContext";
import { getDriver } from "../../../api/fetchSignupApi";

function DriverForm(props){
const { currentUser } = useAuth()
const [error, setError] = useState("")
const [loading, setLoading] = useState(false);
const [doneFetch, setDoneFetch] =useState(false)




// FirstName
const firstNameRef = useRef()
// LastName
const lastNameRef = useRef()
// Email
const emailRef = useRef()
// Mobile 
const mobileRef = useRef()
// license
const licenseRef = useRef()
// Employee Number
const employeeRef = useRef()


// Address 1
const addressOneRef = useRef()
// Address 2
const addressTwoRef = useRef()
// City
const cityRef = useRef()
// State
const stateRef = useRef()
// Postal
const zipRef = useRef()
// Country
const countryRef = useRef()

// TruckNumber 
const truckNumberRef = useRef()
// Trialer Type 
const trailerTypeRef = useRef()
// TrailerNumber
const trailerNumberRef = useRef()

async function handleSubmit(e) {
    e.preventDefault()
    let driver = {
        _id: currentUser.id,
    driver: {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        email: emailRef.current.value,
        mobile: mobileRef.current.value,
        licenseNumbewr: licenseRef.current.value,
        employeeNumber: employeeRef.current.value,
        address: {
            address1: addressOneRef.current.value,
            address2: addressTwoRef.current.value,
            city: cityRef.current.value,
            state: stateRef.current.value,
            postal: zipRef.current.value,
            country: countryRef.current.value
        },
        trailer:{
            number: trailerNumberRef.current.value,
            equipment: trailerTypeRef.current.value,
        },
        truck:{
            number: truckNumberRef.current.value,
        }  
    }
    }
    console.log("Driver: ", driver)
    try {
        setError("")
        setLoading(true)
        setDoneFetch(false)
        let result = await getDriver(driver)
        console.log('Adding New Driver.js:', result)
      } catch {
        setError("Failed to create an account")
      }
}






    
    return(
        <>
            <NavigationBar links={[{link:'/app/loads', title:'Loads'},{link:'/app/drivers', title:'Drivers'},{link:'/app/financials',title:'Financials'},{link:'/app/notifications', title:'Notifications'}]} authActive={true}/>
            <Container className="py-5">
                <Card className='cardShadow p-3'>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col xs={12}>
                            <h3 className="border-bottom pb-3">Add New Driver</h3>
                        </Col>
                        <Col xs={12} md={6}>
                            <Form.Group>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control required ref={firstNameRef}  placeholder="John"  value={'Jonny'}/>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                            <Form.Group>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control required ref={lastNameRef}  placeholder="Smith" value={'Trucker'}/>
                            </Form.Group>
                        </Col>
                        <Col xs={12}>
                            <Form.Group >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" required ref={emailRef}  placeholder="Enter email" value={'RandomTrucker@gmail.com'}/>
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                        </Col>
                        <Col xs={12}>
                            <Form.Group>
                                <Form.Label>Mobile</Form.Label>
                                <Form.Control required ref={mobileRef}  placeholder="Smith" value={'123-456-7890'}/>
                            </Form.Group>
                        </Col>
                        <Col xs={12}>
                            <Form.Group>
                                <Form.Label>Liscense Number</Form.Label>
                                <Form.Control required ref={licenseRef}  placeholder="Smith" value={'A1587632156'}/>
                            </Form.Group>
                        </Col>
                        <Col xs={12}>
                            <Form.Group>
                                <Form.Label>Employee Number</Form.Label>
                                <Form.Control required ref={employeeRef}  placeholder="Smith" value={'0561456'}/>
                            </Form.Group>
                        </Col>


                        <Col xs={12}>
                            <h4 className="mt-5 pb-3 border-bottom">Address Details</h4>
                        </Col>
                        <Col xs={12}>
                            <Form.Group>
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" required ref={addressOneRef} value={'1234 Main St.'}/>
                            </Form.Group>
                        </Col>
                        <Col xs={12}>
                            <Form.Group>
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor"  required ref={addressTwoRef}  value={'Suite 404'}/>
                            </Form.Group>
                        </Col>
                        <Col xs={4}>
                            <Form.Group>
                                <Form.Label>City</Form.Label>
                                <Form.Control  required ref={cityRef} value={'City'}/>
                            </Form.Group>
                        </Col>
                        <Col xs={4}>
                            <Form.Group>
                                <Form.Label>State</Form.Label>
                                <Form.Control as="select" defaultValue="State"  required ref={stateRef}>
                                    <option>Ste</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={4}>
                          <Form.Group>
                                <Form.Label>Postal</Form.Label>
                                <Form.Control required ref={zipRef} value={'34406'}/>
                           </Form.Group>
                        </Col>
                        <Col xs={12}>
                          <Form.Group>
                                <Form.Label>Contry </Form.Label>
                                <Form.Control required ref={countryRef} value={'UnitedStates'}/>
                           </Form.Group>
                        </Col>


                        <Col xs={12}>
                            <h4 className="mt-5 pb-3 border-bottom">Truck Details</h4>
                        </Col>
                        <Col xs={12}>
                          <Form.Group>
                                <Form.Label>Truck Number</Form.Label>
                                <Form.Control  required ref={truckNumberRef} value={'454'}/>
                           </Form.Group>
                        </Col>
                        <Col xs={12}>
                          <Form.Group>
                                <Form.Label>Trailer Type</Form.Label>
                                <Form.Control  required ref={trailerTypeRef}  value={'Reefer'}/>
                           </Form.Group>
                        </Col>
                        <Col xs={12}>
                          <Form.Group>
                                <Form.Label>Trailer Number</Form.Label>
                                <Form.Control  required ref={trailerNumberRef} value={'595'}/>
                           </Form.Group>
                        </Col>
                    </Row>    
                    <Button variant="primary" className="w-100 mt-3" type="submit">
                        Submit
                    </Button>
                </Form>
                </Card>
            </Container>

        </>
    )
}

export default DriverForm