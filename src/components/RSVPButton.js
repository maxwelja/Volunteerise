import React, { useEffect, useState } from 'react';
import {Form, Button, Col, Row, Modal} from 'react-bootstrap';
import axios from 'axios';
import EventDetails from './GetButton/Details';

export default function RSVPButton({user, event}) {
    const url = `http://localhost:4000/api/rsvp/${user}`;
    const [result, setResult] = useState(null);
    const [showModal, setShowModal] = useState(false);
  
    const handleClose = () => {
      setShowModal(false);
    };

    const handleShow = () => {
      setShowModal(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(url, event);
            setResult(res);
            handleShow();
        } catch(error) {
            console.log('error: ', error);
        };
    }

    const handleChange = (e) => {
        setField(e.target.value);
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="ID">
                    {input && <Form.Control
                    type="text"
                    placeholder="Enter ID"
                    value={field}
                    onChange={handleChange}
                    />}
                </Form.Group>
                <Button type="submit"> { btnLabel } </Button>
            </Form>
            <div>
                <Button onClick={handleSubmit}/>
                <Modal
                    show={showModal}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                    <Modal.Title>Events</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <h1>You've RSVP'd!</h1>
                    <p> See you there!</p>
                    <div>
                        {result && 
                            <EventDetails key={result._id} entry={result}/>
                        }
                    </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>            
        </>
    );
};