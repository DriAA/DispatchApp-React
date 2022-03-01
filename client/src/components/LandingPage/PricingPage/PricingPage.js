import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import PricingTab from '../../PricingTab/PricingTab'
import NavigationBar from '../../NavigationBar'
import Footer from '../../Footer/Footer'

function PricingPage(props){
    return(
        <>
        <NavigationBar authActive={false} links={[{link:'/features', title:'features'}, {link:'/pricing', title:"pricing"}, {link:'/contact', title:'contact'}]}/>
        <Container className='py-5'>
            <div>
                <h4 className='display-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                <p className='text-muted lead fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, laudantium minus!</p>
            </div>
            <div>
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <PricingTab title={'Basic'} price={'0.00'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quidem voluptatum quisquam fugit deleniti aut.'} items={['An Item', 'A Second Item', "A Third Item", 'A Fourth Item']}/>
                    </Col>
                    <Col>
                        <PricingTab title={'Advanced'} price={'0.00'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quidem voluptatum quisquam fugit deleniti aut.'} items={['An Item', 'A Second Item', "A Third Item", 'A Fourth Item']}/>
                    </Col>
                    <Col>
                        <PricingTab title={'Pro'} price={'0.00'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quidem voluptatum quisquam fugit deleniti aut.'} items={['An Item', 'A Second Item', "A Third Item", 'A Fourth Item']}/>
                    </Col>
                </Row>
            </div>
        </Container>

        <Footer/>
        </>

    )

}


export default PricingPage