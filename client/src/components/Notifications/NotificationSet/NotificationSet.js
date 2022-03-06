import React from "react";
import NotificationCard from '../NotificationCard/NotificationCard'

function NotificationSet(props){
    return(
        <div data-testid='NotificationSet'>
            <NotificationCard link='/Alerted'/>

            <NotificationCard link='/Alerted'/>

            <NotificationCard link='/Alerted'/>

            <NotificationCard link='/Alerted'/>

            <NotificationCard link='/Alerted'/>

            <NotificationCard link='/Alerted'/>

        </div>
    )
}


export default NotificationSet