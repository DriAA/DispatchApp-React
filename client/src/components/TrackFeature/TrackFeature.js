import React, { useRef } from "react";
import { Container, Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function TrackFeature(props){
    const loadRef = useRef()
    const History = useHistory(

    )
    function handleTracking(e){
        e.preventDefault()
        History.push('/tracking/' + loadRef.current.value)
    }

    return(
        <div className="bg-light">
            <Container className="p-5">
                <h1 className="fs-4 fw-light">Track your load</h1>
                <Form onSubmit={handleTracking}>
                    <InputGroup className="mb-3 mt-3">
                        <FormControl placeholder="Enter your tracking number" ref={loadRef}/>
                        <InputGroup.Text className="bg-primary p-0 m-0">
                            <Button className='border-0 btn-sm m-0  p-2 bg-primary'>
                                Submit
                            </Button>
                        </InputGroup.Text>
                    </InputGroup>
                </Form>
            </Container>
        </div>
    )
}

export default TrackFeature