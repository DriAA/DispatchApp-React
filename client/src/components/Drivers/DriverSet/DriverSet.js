import React from "react";
import DriverCard from "../DriverCard/DriverCard";



function DriverSet(props){
    let driverSet = []
    props.drivers.forEach(driver => {
        driverSet.push(<DriverCard key={driver.id} driver={driver}/>)
        
    });
    return (
        <div  data-testid='driverSet'>
            {driverSet}
        </div>
    )
}

export default DriverSet