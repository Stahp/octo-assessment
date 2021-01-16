import React from 'react'
import { Card } from 'react-bootstrap'
import './SpaceCard.css'
import { Nav} from 'react-bootstrap';

function PlusCard(props) {
    return (
        <Card className="card-space-style" >
          <Nav.Link href="/Add/Space">
            <img src = "plus.png" className= "plus-card-image" />
          </Nav.Link>
        </Card>
    )
}

export default PlusCard
