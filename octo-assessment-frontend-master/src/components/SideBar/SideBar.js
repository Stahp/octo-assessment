import React from 'react';
import { Nav, Navbar, Image } from 'react-bootstrap';
import { IoMdPersonAdd, IoIosStar } from 'react-icons/io';
import './SideBar.css'

function SideBar() {
    return (
        <Navbar bg="light" variant="light">
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link eventKey="disabled" disabled>
                    <IoMdPersonAdd className="side-icons" />
                </Nav.Link>
                <Nav.Link eventKey="disabled" disabled>
                    <IoIosStar className="side-icons" />
                </Nav.Link>
                <Nav.Link eventKey="disabled" disabled>
                    <Image className="side-icons" src="octo-icon.png" />
                </Nav.Link>
                <Nav.Link eventKey="disabled" disabled>
                    <Image className="side-icons" src="octo-icon.png" />
                </Nav.Link>
                <Nav.Link eventKey="disabled" disabled>
                    <Image className="side-icons" src="octo-icon.png" />
                </Nav.Link>
                <Nav.Link eventKey="disabled" disabled>
                    <Image className="side-icons" src="octo-icon.png" />
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default SideBar
