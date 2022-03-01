import React from "react"
import { Card, Container } from "react-bootstrap"
import NavigationBar from "../../NavigationBar"
import './FeaturesPage.css'
import Footer from "../../Footer/Footer"



function FeaturesPage(props){


    return(
        <>
            <NavigationBar authActive={false} links={[{link:'/features', title:'features'}, {link:'/pricing', title:"pricing"}, {link:'/contact', title:'contact'}]}/>
            <div className="feature-cover">
                <Container>
                    <h1 className="display-5">Logistic Services</h1>
                    <p className="lead">With a Wide Variety of Freight shipped, our app can be a one stop shop for all types of freight</p>
                </Container>
            </div>
            <Container className="py-5">
                <h1>Helping companies one step at a time.</h1>
                <p>When using software, make sure you understand what they provide.</p>

                            <Card className="border-0 mt-5">
                                <p className="lead" style={{fontWeight:400}}>If you move full truckload freight, aligning yourself with a reputable and experienced freight broker can give you a competitive advantage.</p>
                                <p className="lead">Our Company has a proven track record with:</p>
                                <ul>
                                    <li><span style={{fontWeight:700}}>Exceptional Management</span>: Ensuring our company provides transparent details on every leg of the trip.</li>
                                    <li><span style={{fontWeight:700}}>Real-Time Data</span>: Working with third party poviders to ensure an uptime of 99%.</li>
                                    <li><span style={{fontWeight:700}}>Affordable Plans</span>: Allowing you to create a customizable, scalable plan that works with your requirements.</li>
                                </ul>
                            </Card>
            </Container>
            <Footer/>
        </>
  
    )
}

export default FeaturesPage