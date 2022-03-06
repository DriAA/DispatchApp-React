import React from "react";
import { ListGroup } from "react-bootstrap";
import './RevenueCard.css'

function RevenueCard(props){
    let driverDataSet= []
    props.drivers.forEach((driver)=> {
        driverDataSet.push(
            <ListGroup.Item  key={driver.name}>
            <div className="d-inline" style={{fontWeight:700}}>{driver.name}</div>
            <div className="float-right">${driver.amount}</div>
            </ListGroup.Item>
        )
    });
    return(
        <div>
             <div className="text-center pt-1">
                <h1 data-testid='grossRevenueTitle' className="fw-bold fs-3">
                    Gross Revenue
                </h1>
                <h2 data-testid='grossRevenueAmount' className="fs-4">
                    ${props.amount}
                </h2>
            </div>
            <h5 data-testid='grossRevenueSubTitle' className="px-3 pb-0">
                Revenue Per Driver:
            </h5>
            <ListGroup variant="flush" data-testid='grossRevenueDriverRoster' className="border-top overflow-scroll h-125px">
                {driverDataSet}
            </ListGroup>

        </div>
    )
}

export default RevenueCard