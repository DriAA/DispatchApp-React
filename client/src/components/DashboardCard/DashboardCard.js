import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import './DashboardCard.css'


function DashboardCard (props){

    
    const element = <FontAwesomeIcon icon={faArrowRight} />

    return(
        <Card data-testid='dashboardCard' className="card-gutter mx-0">
        <Card.Header className="h5 fw-light d-flex">
            <Row className="w-100">
                <Col className="text-start"  data-testid='dashboardCardTitle'>{props.Title}</Col>
                <Col className="text-right p-0 m-0">
                    <Link to={props.link} data-testid='dashboardCardLink'>{element}</Link>
                </Col>
            </Row>
        </Card.Header>
        <Card.Body className="overflow" data-testid='dashboardCardChildren'> 
            {props.children}
        </Card.Body>
    </Card>
    )
}

export default DashboardCard