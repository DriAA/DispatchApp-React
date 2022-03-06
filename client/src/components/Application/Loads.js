import React from "react";
import { Col, Row, InputGroup, FormControl, Form } from "react-bootstrap";

// Components
import NavigationBar from '../NavigationBar'
import LoadSet from "../Loads/LoadSet/LoadSet";

// Data
import loadsDataSet from "../../sampleData/loads";

function Loads(props){
    return(
        <>
            <NavigationBar links={[{link:'/app/loads', title:'Loads'},{link:'/app/drivers', title:'Drivers'},{link:'/app/financials',title:'Financials'},{link:'/app/notifications', title:'Notifications'}]} authActive={true}/>
            <div className="m-5">
                <Row className="border-bottom pb-3"> 
                    <Col xs={12} lg={4}>
                        <h3>All Loads</h3>
                    </Col>
                    <Col xs={12} md={6} lg={4} className="text-md-left text-lg-right m-auto">
                        <a href="/app/loads/new" className="btn btn-primary d-block d-md-inline">Create Load</a>
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
                        <LoadSet loads={loadsDataSet}/>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Loads