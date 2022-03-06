import React from "react";
import NavigationBar from "../NavigationBar";
import { Row,Col, Form, FormControl, InputGroup, } from "react-bootstrap";


function Notifications(props){
    return(
        <>
            <NavigationBar links={[{link:'/app/loads', title:'Loads'},{link:'/app/drivers', title:'Drivers'},{link:'/app/financials',title:'Financials'},{link:'/app/notifications', title:'Notifications'}]} authActive={true}/>
            <div className="m-5">
                <Row className="border-bottom pb-3"> 
                    <Col xs={12} lg={4}>
                        <h3>Notifications</h3>
                    </Col>
                    <Col xs={12} md={6} lg={4} className="text-md-left text-lg-right m-auto">
                        <a href="/app/" className="btn btn-primary d-block d-md-inline">Add Notifications</a>
                    </Col>
                    <Col xs={12} md={6} lg={4} className='m-auto'>
                    <Form>
                        <InputGroup >
                            <InputGroup.Text className="rounded-0">Search By:</InputGroup.Text>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Broker</option>
                                <option>Load ID</option>
                            </Form.Control>
                            <FormControl placeholder="Search here" />
                            <InputGroup.Text className="rounded-0">X</InputGroup.Text>
                        </InputGroup>
                    </Form>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ height:'75vh', overflowY:'auto'}}>
                        <h1 className="display-4">
                            No current Notifcations
                        </h1>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Notifications