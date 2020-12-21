import React from 'react';
import './UserDetails.css';
import { FaUserAlt, FaRegCalendarAlt } from 'react-icons/fa';

function UserDetails(props) {
    return (
        <div className="h-container user-details-container">
            <div className="img-style">
                <FaUserAlt className="user-icon"/>
            </div>
            <div>
                <div className="details-name">{props.name}</div>
                <div className="details-company">{props.email}</div>
                <div className="details-description">{props.resume}</div>
                <div className="details-date h-container">
                    <FaRegCalendarAlt className="calendar-icon"/>
                    <div>Member since : {props.creationDate}</div>
                </div>
            </div>
        </div>
    )
}

export default UserDetails
