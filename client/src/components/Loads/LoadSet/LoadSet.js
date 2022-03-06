import React from "react";
import LoadCard from '../LoadCard/LoadCard'
function LoadSet(props){
    const loads = props.loads
    let loadSet = []
    loads.forEach(load => {
        loadSet.push(<LoadCard key={load.invoiceNumber} load={load}/>)
    });
    
    return (

        <div data-testid='loadSet'>
            {loadSet}
        </div>
    )
}

export default LoadSet