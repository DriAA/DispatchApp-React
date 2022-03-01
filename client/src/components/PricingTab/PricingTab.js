import React from 'react'
import { Card, Container, ListGroup } from 'react-bootstrap'

function PricingTab(props){
    const lists = []
    props.items.forEach(item=>{
        lists.push(
            <ListGroup.Item className='bg-light'>{item}</ListGroup.Item>
        )
    })

    return(
        
        <Card className='bg-light text-center p-5'>
            <Container>
            <div className='mb-5'>
                <h1 className='display-5'>{props.title}</h1>
                <p className='fw-bold display-4'>{props.price}</p>
                <p>{props.description}</p>
            </div>
            <ListGroup variant="flush">
                {lists}
            </ListGroup>
            </Container>
            <div className='mt-5'>
                <a href='/pricing' className='d-block btn btn-success'>Buy Now</a>
            </div>
        </Card>
    )
}

export default PricingTab