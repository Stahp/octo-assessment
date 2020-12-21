import React from 'react'
import { Card } from 'react-bootstrap'
import { GiAlarmClock } from 'react-icons/gi';
import { MdLock } from 'react-icons/md'
import './TitleCard.css'

function TitleCard(props) {
    return (
        <Card className="card-title-style">
            <div className="card-title-body">
                <Card.Text>
                    {
                        props.state ?
                            <GiAlarmClock className="recently-added-icon icon-size" />
                            :
                            <MdLock className="lock-icon icon-size" />
                    }
                </Card.Text>
                <Card.Text className="card-title-name">{props.name}</Card.Text>
                <Card.Text className="card-title-description">{props.description}</Card.Text>
            </div>
        </Card>
    )
}

export default TitleCard
