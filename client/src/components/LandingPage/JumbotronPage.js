import React from 'react'
import {Container, Col, Row } from 'react-bootstrap'
import FeatureTab from '../FeatureTab/FeatureTab'
import TrackFeature from '../TrackFeature/TrackFeature'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavigationBar from '../NavigationBar'

// Assets
import './JumbotronPage.css'
import ItemOne from '../../Image/ItemOne.jpeg'
import ItemTwo from '../../Image/ItemTwo.jpeg'
import ItemThree from '../../Image/ItemThree.jpeg'
import Footer from '../Footer/Footer'

import { faFileContract, faClock, faDollar } from '@fortawesome/free-solid-svg-icons'


function JumbotronPage(props){

    const ContractElement = <FontAwesomeIcon className='mb-4' style={{fontSize:'2em'}} icon={faFileContract} />
    const ClockElement = <FontAwesomeIcon className='mb-4' style={{fontSize:'2em'}} icon={faClock} />
    const DollarElement = <FontAwesomeIcon className='mb-4' style={{fontSize:'2em'}} icon={faDollar} />



    return(
        <>
            <NavigationBar authActive={false} links={[{link:'/features', title:'features'}, {link:'/pricing', title:"pricing"}, {link:'/contact', title:'contact'}]}/>

            <div className='main-cover text-center'>
                <h1 className='display-4 lead'>Tracking one click away</h1>
                <p className='lead mb-5'>Never miss real time data on a load again.</p>
                <button className='btn btn-primary link'>Start Tracking Now</button>
            </div>
            <Container className='my-5'>
                <Row xs={1} lg={3} className="g-4 m-3">
                        <Col className='p-3'>
                            <FeatureTab image={ItemOne} title="Custom Packaging" content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequatur earum aliquam dolorum provident hic error facilis veritatis non perferendis beatae, optio inventore nesciunt autem, possimus itaque, consequuntur praesentium esse!'/>
                        </Col>
                        <Col className='p-3'>
                            <FeatureTab image={ItemTwo} title="Warehouse Delivery" content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequatur earum aliquam dolorum provident hic error facilis veritatis non perferendis beatae, optio inventore nesciunt autem, possimus itaque, consequuntur praesentium esse!'/>
                        </Col>
                        <Col className='p-3'>
                            <FeatureTab image={ItemThree} title="Delivery Anyday. Anywhere" content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequatur earum aliquam dolorum provident hic error facilis veritatis non perferendis beatae, optio inventore nesciunt autem, possimus itaque, consequuntur praesentium esse!'/>
                        </Col>
                    </Row>
            </Container>


            <TrackFeature/>

            <Container className='my-5 text-center'>
                <Row xs={1} lg={3} className="g-4 m-3">
                        <Col className='p-3'>
                            {ContractElement}
                            <p className='lead' style={{fontSize:'1.5em', fontWeight:500}}>No <br/> Contract</p>
                        </Col>
                        <Col className='p-3'>
                            {ClockElement}
                            <p className='lead' style={{fontSize:'1.5em', fontWeight:500}}>27 / 7 <br/> Support</p>

                        </Col>
                        <Col className='p-3'>
                            {DollarElement}
                            <p className='lead' style={{fontSize:'1.5em', fontWeight:500}}>No <br/> Hidden Fees</p>

                        </Col>
                    </Row>
            </Container>

            <Footer/>
            
        </>



    )
}

export default JumbotronPage