import React from 'react'
import { Card } from 'react-bootstrap'
import './SpaceCard.css'

function SpaceCard(props) {
    return (
        <Card className="card-space-style">
            <div className="card-space-header">
                <Card.Text className="card-space-name">{props.name}</Card.Text>
                <Card.Text className="card-space-date">{props.date}</Card.Text>
            </div>
            <div className={props.state ? "card-space-body" : "card-space-body-close"}></div>
            <div className="card-space-footer">
                <Card.Text className="card-space-subspaces">{props.subspaces} Subspaces</Card.Text>
                <Card.Text className={props.state ? "card-space-state" : "card-space-state-closed"}>{props.state ? "Active" : "Closed"}</Card.Text>
            </div>
        </Card>
    )
}

export default SpaceCard
