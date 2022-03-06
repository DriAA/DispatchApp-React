import React from "react";
import { Row, Col } from "react-bootstrap";
import './LoadCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";


function LoadCard(props){
    const pickup = <FontAwesomeIcon style={{color:'green'}} icon={faMapMarkerAlt} />
    const delivery = <FontAwesomeIcon style={{color:'red'}} icon={faMapMarkerAlt} />
    return(
        <NavLink to={"/app/loads/" + props.load.id} style={{color:"black", textDecoration:'none'}}>
        <div className="card p-3 cardShadow my-3 dark-on-hover"  data-testid='loadCard'>
            <Row>
                <Col>
                    <div data-testid='loadCardBroker' className="d-block fs-5 text-start lead" style={{fontWeight:700}}>
                        {props.load.brokerName}
                    </div>
                    <div className="text-muted text-start" data-testid='loadCardLoadNumber' style={{fontSize:'.8em'}}>
                        Load id: {props.load.loadNumber}
                    </div>
                </Col>
                <Col className="text-right">
                        <div className="d-block fs-5 lead" data-testid='loadCardRate' style={{fontWeight:700}}>
                            ${props.load.rate}
                        </div>
                        <div className="text-muted" data-testid='loadCardRPM' style={{fontSize:'.8em'}}>
                            {(props.load.rate / props.load.miles).toFixed(2) } / mi
                        </div>
                </Col>
            </Row>
            <Row className="py-3">
                <Col xs sm md lg={2} className="text-start">
                    <p style={{fontSize: '.9em'}} className="m-0 text-muted lead text-center">{props.load.date.pickup.month} <span style={{fontSize:'1em', color:'black'}} className="d-block fw-bold">{props.load.date.pickup.date} </span>{props.load.date.pickup.day} </p>
                </Col>
                <Col className="border-start ps-3">
                    <p className="text-start">{pickup} <span style={{fontWeight:700}}>{props.load.pickup.city}, {props.load.pickup.state}</span></p>
                    <p className="text-start">{delivery}  <span style={{fontWeight:700}}>{props.load.delivery.city}, {props.load.delivery.state}</span></p>
                </Col>
            </Row>
            <Row>
                <Col style={{fontSize:'.8em'}}  className="text-muted text-start">
                    Driver: {props.load.driver}
                </Col>
                <Col style={{fontSize:'.8em'}}   data-testid='loadCardMiles'  className="text-right text-muted">
                    {props.load.miles} mi
                </Col>
            </Row>
        </div>
        </NavLink>

    )
}


export default LoadCard