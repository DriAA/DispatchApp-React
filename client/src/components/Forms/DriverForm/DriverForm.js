import React from "react";
import NavigationBar from "../../NavigationBar";
import { Container, Card, Form, Row, Col } from "react-bootstrap";

function DriverForm(props){
    return(
        <>
            <NavigationBar links={[{link:'/app/loads', title:'Loads'},{link:'/app/drivers', title:'Drivers'},{link:'/app/financials',title:'Financials'},{link:'/app/notifications', title:'Notifications'}]} authActive={true}/>
            <Container className='p-5'>
                <Card className='cardShadow p-3'>
                    <div className='border-bottom mb-3'><h3>Add New Driver</h3></div>
                    <Form>
                        <Row>
                            <Col xs={12} md={6}>
                                <Form.Group>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control placeholder="John" />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control placeholder="Smith" />
                                </Form.Group>
                            </Col>
                            <Col xs={12}>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            </Col>
                            <Col xs={12}>
                                <Form.Group>
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control placeholder="111-111-1111" />
                            x    </Form.Group>
                            </Col>
                            <Col xs={12}>
                                <Form.Group>
                                    <Form.Label>Truck Number</Form.Label>
                                    <Form.Control placeholder="L132" />
                                </Form.Group>
                            </Col>
                            <Col xs={12}>
                                <Form.Group>
                                    <Form.Label>Trailer Number</Form.Label>
                                    <Form.Control placeholder="R0013" />
                                </Form.Group>
                            </Col>
                            
                        </Row>

                    </Form>
                </Card>
            </Container>
        </>
        
    )
}

export default DriverForm