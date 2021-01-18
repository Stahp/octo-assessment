import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import './SpaceDetailForm.css'
import SubspaceCard from '../../Cards/SubspaceCard/SubspaceCard';
import PlusCard from '../../Cards/PlusCard';

import { generatePath } from "react-router";

function SpaceDetailForm(props) {
  //debugger;

  //<div className={props.state ? "card-space-body" : "card-space-body-close"}></div>
  //var href= generatePath("/Spaces/:id", {id: props.id})
    return (

      <div className="h-container">
        <div className="dashboard-container">
          <div className= "user-details-container">
              <Form>
                <Form.Group as={Row} controlId="formPlaintextName">
                  <Form.Label column sm="2">
                    Name
                  </Form.Label>
                  <Col>
                    <Form.Control plaintext readOnly defaultValue= {props.space.name} />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextDescription">
                  <Form.Label column sm="2">
                    Description
                  </Form.Label>
                  <Col>
                    <Form.Control plaintext readOnly  defaultValue= {props.space.description} />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextDescription">
                  <Form.Label column sm="2">
                    Creation Date
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control plaintext readOnly  defaultValue= {props.space.creationDate} />
                  </Col>
                </Form.Group>

                <Form.Check
                  disabled
                  checked= {props.space.privacy}
                  type='checkbox'
                  id= 'default-checkbox'
                  label= 'Private'
                />

              </Form>
            </div>
            <div className="spaces-list-container">
              <div className="spaces-title">Subpaces</div>
              <div className="active-spaces-list-container h-container">
                {
                    props.space.subspaces.map(s => {
                        if (!s.privacy)
                            return (
                                <SubspaceCard key={s.id} id= {s.id} name={s.name} date={s.creationDate} state={s.privacy}/>
                            )
                    })
                }
                <PlusCard href= "/Add/Subspace"/>
              </div>
            </div>
        </div>
      </div>
    )
}

export default SpaceDetailForm
