import React, {useRef} from 'react'
import NavigationBar from '../../NavigationBar'
import { Card, Container, Form, Col, Row, InputGroup } from 'react-bootstrap'
import LoadInputGroup from '../../LoadInputGroup/LoadInputGroup'

function LoadsForm(props){
    const brokerRef = useRef()
    const loadRef = useRef()
    const rateRef = useRef()
    const commodityRef = useRef()
    const weightRef = useRef()
    const tempRef = useRef()
    const typeRef = useRef()

    const originDateRef = useRef()
    const originCityRef = useRef()
    const originStateRef = useRef()

    const destinationDateRef = useRef()
    const destinationCityRef = useRef()
    const destinationStateRef = useRef()

    const driverRef = useRef()
    const trailerNumberRef = useRef()
    const truckNumberRef = useRef()
    const notesRef = useRef()

    function handleSubmit(e){
        e.preventDefault()
        const loadDetail = {
            loadID: loadRef.current.value,
            dates:
            {
                pickup: originDateRef.current.value,
                delivery: destinationDateRef.current.value,
            },
            rate: rateRef.current.value,
            commodity: commodityRef.current.value,
            weight: weightRef.current.value,
            driver: driverRef.current.value,
            type: typeRef.current.value,
            note: notesRef.current.value,
            route:
            {
                pickup:{
                    city: originCityRef.current.value, 
                    state: originStateRef.current.value
                },
                delivery:{
                    city: destinationCityRef.current.value,
                    state: destinationStateRef.current.value
                }
            }
        }

        console.log(loadDetail)
    }


    return(
        <>
            <NavigationBar links={[{link:'/app/loads', title:'Loads'},{link:'/app/drivers', title:'Drivers'},{link:'/app/financials',title:'Financials'},{link:'/app/notifications', title:'Notifications'}]} authActive={true}/>
            <Container className='p-5'>
                <Card className='cardShadow p-3'>
                    <div className='border-bottom mb-3'><h3>Add New Load</h3></div>
                    <Form onSubmit={handleSubmit}>
                        <Row className='space-between m-auto'>
                            <Col xs={4}>
                                <Card className='cardShadow text-center h-100 p-5'>Broker Select</Card>    
                            </Col>
                            <Col xs={4}/>
                            <Col xs={4}>
                            <Form.Group as={Row} className="mb-3" >
                                <Form.Label column sm={6}>
                                    Load #
                                </Form.Label>
                                <Col sm={6}>
                                <Form.Control ref={loadRef} required placeholder="001" />
                                </Col>
                            </Form.Group>
                            </Col>
                        </Row>
                        <Row className='p-2'>
                            <Col xs={12} className="mt-5">
                                <h3 className='fw-bold'>Load Details</h3>
                            </Col>

                            <Col>
                            <Form.Group>
                                <Form.Label>Rate</Form.Label>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control ref={rateRef} type="text" placeholder="00.00" aria-describedby="inputGroupPrepend" />
                                </InputGroup>
                            </Form.Group>
                            </Col>

                            <Col xs={12}>
                            <Form.Group>
                            <Form.Label>Commodity</Form.Label>
                            <Form.Control as="select" custom ref={commodityRef}>
                                <option>Meat</option>
                                <option>Canned Food</option>
                                <option>Drink</option>
                                <option>Perishable</option>
                                <option>Live Stock</option>
                                <option>Vegetables</option>
                                <option>Fruits</option>
                                <option>Dairy</option>
                                <option>Chemicals</option>
                                <option>Equipment</option>
                                <option>Other</option>
                            </Form.Control>
                            </Form.Group>
                            </Col>

                            <Col xs={12}>
                            <Form.Group>
                                <Form.Label>Weight</Form.Label>
                                <InputGroup>
                                    <Form.Control 
                                    ref={weightRef}
                                    type="text"
                                    placeholder="1,000"
                                    aria-describedby="inputGroupPrepend"
                                    />
                                    <InputGroup.Prepend className='rounded-right'>
                                        <InputGroup.Text className='rounded-right' id="inputGroupPrepend">Lbs.</InputGroup.Text>
                                    </InputGroup.Prepend>
                                </InputGroup>
                            </Form.Group>
                            </Col>
                            

                            <Col xs={12}>
                                <Form.Group>
                                    <Form.Label>Temperature</Form.Label>
                                    <Form.Control ref={tempRef} type="text" />
                                </Form.Group>
                            </Col>
                            <Col xs={12}>
                                <Form.Group>
                                    <Form.Label>Load Type</Form.Label>
                                    <Form.Control ref={typeRef} type="text" />
                                </Form.Group>
                            </Col>


                        </Row>
                        <Row className='p-2'>
                            <Col xs={12} md={6}>
                                <Row>
                                <Col xs={12} className='mb-3'>
                                    <Form.Label>Origin Date</Form.Label>
                                    <Form.Control ref={originDateRef} type="date" name='Origin_Date' />
                                </Col>
                                <Col xs={12} className='mb-3'>
                                    <Form.Label>Origin Location</Form.Label>
                                    <InputGroup className="mb-3">
                                        <Form.Control ref={originCityRef} placeholder='City' />
                                        <Form.Control ref={originStateRef} placeholder='State' />
                                    </InputGroup>
                                </Col>
                                </Row>
                            </Col>

                            <Col xs={12} md={6}>
                                <Row>
                                <Col xs={12} className='mb-3'>
                                    <Form.Label>Destination Date</Form.Label>
                                    <Form.Control ref={destinationDateRef} type="date" name='Desitation_Date' />
                                </Col>
                                <Col xs={12} className='mb-3'>
                                <Form.Label> Destination Location</Form.Label>
                                <InputGroup className="mb-3">
                                    <Form.Control ref={destinationCityRef} placeholder='City' />
                                    <Form.Control ref={destinationStateRef} placeholder='State' />
                                </InputGroup>
                                </Col>
                                </Row>
                            </Col>

                        </Row>
                        <Row className='p-2'>
                            <Col xs={12}>
                                <h3 className='fw-bold my-3'>Driver Details</h3>
                            </Col>
                            
                            <Col xs={12}>
                            <Form.Group>
                            <Form.Label>Driver</Form.Label>
                            <Form.Control as="select" custom ref={driverRef}>
                                <option>Undecided</option>
                                <option>Mark</option>
                                <option>John</option>
                                <option>Bob</option>
                            </Form.Control>
                            </Form.Group>
                            </Col>

                            <Col xs={12}>
                            <Form.Group>
                            <Form.Label>Truck Number</Form.Label>
                            <Form.Control as="select" custom ref={truckNumberRef}>
                                <option>Undecided</option>
                                <option>595</option>
                                <option>142</option>
                                <option>932</option>
                            </Form.Control>
                            </Form.Group>
                            </Col>

                            <Col xs={12}>
                            <Form.Group>
                            <Form.Label>Trailer Number</Form.Label>
                            <Form.Control as="select" custom ref={trailerNumberRef}>
                                <option>Undecided</option>
                                <option>34</option>
                                <option>32</option>
                                <option>004</option>
                            </Form.Control>
                            </Form.Group>
                            </Col>

                        </Row>

                        <Row className='p-3'>
                            <Col xs={12}>
                                <LoadInputGroup/>
                            </Col>
                        </Row>
                        <Row className='p-2'>
                            <Col xs={12}>
                            <Form.Group>
                                <Form.Label>Notes</Form.Label>
                                <Form.Control as="textarea" ref={notesRef} rows={3} />
                            </Form.Group>
                            </Col>

                            <Col className='my-5'>
                                <button type='submit' className='btn btn-primary d-block w-100'>Save Load</button>
                            </Col>
                        </Row>
                        
                    </Form>
                </Card>
            </Container>
        </>
    )
}


export default LoadsForm