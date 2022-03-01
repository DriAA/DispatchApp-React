import React from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import NavigationBar from '../../NavigationBar'
import Footer from '../../Footer/Footer'
import './ContactPage.css'


function ContactPage(props){
    return(
        <div>
            <NavigationBar authActive={false} links={[{link:'/features', title:'features'}, {link:'/pricing', title:"pricing"}, {link:'/contact', title:'contact'}]}/>
            <div className='contact-cover'>
                <Container className='py-4 '>
                    <h1>TELL US WHAT YOU'RE LOOKING FOR</h1>
                    <p className=' lead '>Send us a message.</p>
                </Container>
            </div>

            <Container className='my-5'>
                <h1 className='lead display-6 mb-5' style={{fontWeight:700, fontSize:'2em'}}>Contact Information</h1>
                <Row xs={1} md={2} className="g-4">
                    <Col>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control placeholder="John" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control placeholder="Smith" />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" controlId="Email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="phoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control  placeholder="000-000-0000" />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="Message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                            as="textarea"
                            placeholder="Leave a Message here"
                            style={{ height: '100px' }}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </Col>
                    <Col>
                        <div className='mx-5 my-3'>
                            <div className='mb-3'>
                                <h4 className='fw-bold d-block'>Store Name</h4>
                                <p className='lead d-block mb-0'>
                                    1324 Main St.
                                </p>
                                <p className='lead d-block mb-0'>
                                    City, State Zip
                                </p>
                                <p className='lead d-block mb-0'>
                                    United States
                                </p>
                            </div>
                            <div>
                                <h4 className='fw-bold d-block'>Contact</h4>
                                <p className='lead d-block mb-0'>
                                    First Name Last Name
                                </p>
                                <p className='lead d-block mb-0'>
                                    ### ### ####
                                </p>
                                <p className='lead d-block mb-0'>
                                    sample@email.com
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Footer/>

        </div>
    )
}

export default ContactPage