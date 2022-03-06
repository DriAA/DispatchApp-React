import React from "react";
import { Alert } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";
import './NotificationCard.css'



const alertIcon = <FontAwesomeIcon icon={faInfoCircle} />

function NotificationCard(props){

    const History = useHistory();
    const handleOnClick =  (()=>{
        History.push('/app/notifications')
    })


    return(
            <Alert onClick={handleOnClick} variant={'warning'} className=" align-middle p-1 dark-on-hover my-3">
               <span style={{fontSize:'2em'}} className="mx-3 align-middle">{alertIcon}</span>
                No Driver has been assigned to load 03153311
            </Alert>
    )
}

export default NotificationCard