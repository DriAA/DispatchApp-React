import React from "react"
import {Navbar, Row, Col, Container, ListGroup} from 'react-bootstrap'

function Footer(props){
    return(
        <Navbar bg='light' className="mt-5">
            <Container>
            <Row className="g-4 m-3">
                    <Col>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ex alias distinctio laudantium? Fugiat voluptates at aliquid minus.
                        </p>
                    </Col>
                    <Col>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="bg-light border-0 fw-bold">Cras justo odio</ListGroup.Item>
                            <ListGroup.Item className="bg-light border-0">Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item className="bg-light border-0">Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item className="bg-light border-0">Porta ac consectetur ac</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="bg-light border-0 fw-bold">Cras justo odio</ListGroup.Item>
                            <ListGroup.Item className="bg-light border-0">Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item className="bg-light border-0">Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item className="bg-light border-0">Porta ac consectetur ac</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="bg-light border-0 fw-bold">Cras justo odio</ListGroup.Item>
                            <ListGroup.Item className="bg-light border-0">Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item className="bg-light border-0">Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item className="bg-light border-0">Porta ac consectetur ac</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>

        </Navbar>
    )
}

export default Footer