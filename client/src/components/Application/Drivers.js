import React from "react";
import { Row, Col, Form, InputGroup, FormControl } from "react-bootstrap";
import NavigationBar from '../NavigationBar'
import driverDataSet from "../../sampleData/driver";
import DriverSet from "../Drivers/DriverSet/DriverSet";



function Drivers(props){
    return(
        <>
            <NavigationBar links={[{link:'/app/loads', title:'Loads'},{link:'/app/drivers', title:'Drivers'},{link:'/app/financials',title:'Financials'},{link:'/app/notifications', title:'Notifications'}]} authActive={true}/>
            <div className="m-5">
                <Row className="border-bottom pb-3"> 
                    <Col xs={12} lg={4}>
                        <h3>All Drivers</h3>
                    </Col>
                    <Col xs={12} md={6} lg={4} className="text-md-left text-lg-right m-auto">
                        <a href="/app/drivers/new" className="btn btn-primary d-block d-md-inline">Create Driver</a>
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
                    <Col style={{ height:'75vh', overflowY:'scroll'}}>
                        <DriverSet drivers={driverDataSet}/>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Drivers