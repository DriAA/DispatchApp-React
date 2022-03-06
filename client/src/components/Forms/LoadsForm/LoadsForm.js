import React from 'react'
import NavigationBar from '../../NavigationBar'
import { Card, Container, Form, Col, Row } from 'react-bootstrap'


function LoadForm(props){
    return(
        <>
            <NavigationBar links={[{link:'/app/loads', title:'Loads'},{link:'/app/drivers', title:'Drivers'},{link:'/app/financials',title:'Financials'},{link:'/app/notifications', title:'Notifications'}]} authActive={true}/>
            <Container className='p-5'>
                <Card className='cardShadow p-3'>
                    <div className='border-bottom mb-3'><h3>Add New Load</h3></div>
                    <Form>
                        <Row className='space-between'>
                            <Col xs={4}>
                                <Card className='cardShadow text-center h-100 p-5'>Broker Select</Card>    
                            </Col>
                            <Col xs={4}/>
                            <Col xs={4}>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                <Form.Label column sm={6}>
                                    Invoice #
                                </Form.Label>
                                <Col sm={6}>
                                <Form.Control type="password" placeholder="Password" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                <Form.Label column sm={6}>
                                    Load #
                                </Form.Label>
                                <Col sm={6}>
                                <Form.Control type="password" placeholder="Password" />
                                </Col>
                            </Form.Group>

                            </Col>
                        </Row>
                    </Form>
                </Card>
            </Container>
        </>
    )
}


export default LoadForm