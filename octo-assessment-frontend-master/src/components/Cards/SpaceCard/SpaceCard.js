import React from 'react'
import { Card } from 'react-bootstrap'
import './SpaceCard.css'
import { Nav} from 'react-bootstrap';

import { generatePath } from "react-router";

function SpaceCard(props) {
  //debugger;

  //<div className={props.state ? "card-space-body" : "card-space-body-close"}></div>
  var href= generatePath("/Spaces/:id", {id: props.id})
    return (
        <Card className="card-space-style">
          <Nav.Link href={href}>
            <Card.Title className="card-space-name">{props.name}</Card.Title>
            <Card.Text className="card-space-date">{props.date}</Card.Text>

            <Card.Text className="card-space-subspaces">{props.subspaces} Subspaces</Card.Text>
            <Card.Text className={props.state ? "card-space-state" : "card-space-state-closed"}>{props.state ? "Active" : "Closed"}</Card.Text>
          </Nav.Link>
        </Card>
    )
}

export default SpaceCard
