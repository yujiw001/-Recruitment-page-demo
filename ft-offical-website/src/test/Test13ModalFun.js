import React, { Component, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


import './Test13Modal.css';

function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title className="ft-w1140-section-fs24">Become a driver</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <Form>
              {/* Area */}
              <span className="ft-w1140-field-fs16">Area</span><span className="fd-deliver-app-field">*</span>
              <Dropdown>
                <Dropdown.Toggle className="fd-deliver-area-items" variant="light-out" id="dropdown-basic">
                  Chose your Area
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Vancouver</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Toronto</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {/* name */}
              <span className="ft-w1140-field-fs16">Name</span><span className="fd-deliver-app-field">*</span>
              <InputGroup className="mb-3">
                {/* <InputGroup.Prepend>
                  <InputGroup.Text>First and last name</InputGroup.Text>
                </InputGroup.Prepend> */}
                <FormControl type="text" placeholder="First name"/>
                <FormControl type="text" placeholder="Last name"/>
              </InputGroup>
              {/* phone */}
              <span className="ft-w1140-field-fs16">Phone</span><span className="fd-deliver-app-field">*</span>
              <InputGroup className="mb-3">
                <FormControl type="text" placeholder="Phone"/>
              </InputGroup>
              {/* address */}
              <span className="ft-w1140-field-fs16">Address</span><span className="fd-deliver-app-field">*</span>
              <InputGroup className="mb-3">
                <FormControl type="text" placeholder="Phone"/>
              </InputGroup>


              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Example select</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Example multiple select</Form.Label>
                <Form.Control as="select" multiple>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
            </Form>            
                        
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  // render(<Example />);

  export default Example;
  