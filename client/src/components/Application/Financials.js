import React from "react";
import NavigationBar from "../NavigationBar";
import { Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet, faMoneyBill, faTruck } from '@fortawesome/free-solid-svg-icons'
import '../Loads/LoadCard/LoadCard.css'


import overviewData from '../../sampleData/overviewData'
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';


function Financials(props){

    const RevenueIcon = <FontAwesomeIcon className="py-4 mx-2" icon={faWallet} style={{fontSize:'1.8em'}}/>
    const BillIcon = <FontAwesomeIcon className="py-4 mx-2" icon={faMoneyBill} style={{fontSize:'1.8em'}}/>
    const TruckIcon = <FontAwesomeIcon className="py-4 mx-2" icon={faTruck} style={{fontSize:'1.8em'}}/>

    ChartJS.register(ArcElement, CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);
    const DoughnutOptions = {
        responsive: true,
        aspectRatio:1,
        maintainAspectRatio:false
    }


    return(
        <>
            <NavigationBar links={[{link:'/app/loads', title:'Loads'},{link:'/app/drivers', title:'Drivers'},{link:'/app/financials',title:'Financials'},{link:'/app/notifications', title:'Notifications'}]} authActive={true}/>
            <div className="p-3">
                <Row>
                    <Col xs={12} md={4} className='p-1'>
                        <Card className="p-4 h-100 cardShadow">
                        <span>{RevenueIcon}</span>   
                        <p className="text-muted">Total Revenue</p>
                        <h1>$3149.56</h1>
                        </Card>
                    </Col>
                    <Col xs={12} md={4} className='p-1'>
                        <Card className="p-4 h-100 cardShadow">
                            <span>{BillIcon}</span>   
                            <p className="text-muted">Total Factored</p>
                            <h1>$3149.56</h1>
                        </Card>
                    </Col>
                    <Col xs={12} md={4} className='p-1'>
                        <Card className="p-4 h-100 cardShadow">
                            <span>{TruckIcon}</span>   
                            <p className="text-muted">Total Loads Completed</p>
                            <h1>13</h1>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} className='p-1'>
                        <Card className="p-3 cardShadow h-100">
                            <h3 className="mb-5">Overview</h3>
                            <Bar data={overviewData}/> 
                        </Card>
                    </Col>
                    <Col xs={12} md={6} className='p-1'>
                        <Card className="cardShadow h-100 p-3">
                            <h3>Driver Overview</h3>
                            <div style={{height:'100%'}}>
                                <Doughnut options={DoughnutOptions} data={overviewData} />
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>

        </>
    )
}

export default Financials