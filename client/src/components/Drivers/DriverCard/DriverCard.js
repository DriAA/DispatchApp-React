import React from "react";
import { Row, Col } from "react-bootstrap";
import './DriverCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";
const locationIcon = <FontAwesomeIcon  icon={faMapMarkerAlt} />

function DriverCard(props){
    return(
        <NavLink data-testid='driverLink' to={"/drivers/" + props.driver.id} style={{color:"black", textDecoration:'none'}}>
        <div data-testid='driverCard' className="card p-3 cardShadow my-3">
            <Row>
                <Col xs sm md lg={2}  data-testid='driverPicture'>
                    <img  alt='driver Profile' src={props.driver.profilePicture.url} className="user"/>
                </Col>
                <Col className="m-auto"  data-testid='driverDetails'>
                    <h5 style={{fontSize:'1.2em'}} className="mb-0">{props.driver.firstName} {props.driver.lastName}</h5>
                    <p style={{fontSize:'.8em'}} className="text-muted mb-0 mt-1">{props.driver.phone}</p>
                    <p className="text-muted mb-0" style={{fontSize:'.8em'}}>{locationIcon} {props.driver.location.city}, {props.driver.location.state} </p>
                </Col>
                <Col className="text-right"  data-testid='driverStatus'>
                    <span className="badge bg-success text-white">Active</span>
                </Col>
            </Row>
        </div>
        </NavLink>
    )
}

export default DriverCard