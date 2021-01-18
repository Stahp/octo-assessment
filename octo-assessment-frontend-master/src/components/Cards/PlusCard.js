import React from 'react'
import { Card } from 'react-bootstrap'
import './PlusCard.css'
import { Nav} from 'react-bootstrap';

function PlusCard(props) {
    return (
        <Card className="card-space-style" >
          <Nav.Link href= {props.href}>
            <img src = "/plus.png" className= "plus-card-image" />
          </Nav.Link>
        </Card>
    )
}

export default PlusCard
