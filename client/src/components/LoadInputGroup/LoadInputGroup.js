import React, {useState} from "react";
import {Table, InputGroup, Form, Row, Col} from "react-bootstrap"

function LoadInputGroup(props){
    const [TotalLanes,setTotalLanes] = useState([])

    function addLane(){
        console.log("I was Clicked")
        let newLane = TotalLanes.push(
            <tr>
            <td className='text-center m-auto align-middle'>1</td>
            <td>
            <InputGroup>
                <Form.Control  placeholder='City' />
                <Form.Control placeholder='State' />
            </InputGroup>
            </td>
            <td className='text-center m-auto align-middle'>X</td>
            </tr>
        )

        console.log("New Lane: ", newLane)

        setTotalLanes(newLane)
        console.log(TotalLanes)
    }


    return(
        <>
            <Row>
                <Col xs={3} className='mb-3'>
                    <Form.Label>Pickup Date</Form.Label>
                    <Form.Control type="date" name='Pickup_Date' />
                </Col>
                <Col xs={3} className='mb-3'>
                    <Form.Label>Delivery Date</Form.Label>
                    <Form.Control type="date" name='Delivery' />
                </Col>
                <Col className="text-right m-auto">
                    <button className="btn btn-primary" type="button" onClick={addLane}>Add Lane</button>
                </Col>
            </Row>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Stop</th>
                    <th >Route</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {TotalLanes}
                </tbody>
            </Table>
        </>

    )
}

export default LoadInputGroup