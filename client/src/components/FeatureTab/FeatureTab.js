import React from "react"
import { Card } from "react-bootstrap"

function FeatureTab(props){
    return(
        <Card className="h-100">
        <Card.Img variant="top" src={props.image}/>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.content}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted fs-6"><a href="/contact">Start Today</a></Card.Footer>
      </Card>
    )
}

export default FeatureTab