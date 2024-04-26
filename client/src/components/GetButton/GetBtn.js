import React, { useState } from 'react';
import {Form, Button, Modal} from 'react-bootstrap';
import axios from 'axios';
import Details from './Details';

export default function GetBtn({btnLabel, collection, queryKey='', input=false}) {
    const [res, setRes] = useState(null);
    const [qKey, setQKey] = useState(queryKey);
    const [queryValue, setQueryValue] = useState('');
    const [showModal, setShowModal] = useState(false);
    const modalTitle = collection.toUpperCase();
    const link =`http://localhost:4000/api/${collection}`;
    let url = link;
    
    // check for query and parse into the final url string
    if (queryValue !== '') {
        url += `?${qKey}=${queryValue}`;
    } else {
        url = `${link}`;
    }
    if (input === "true") input = true;
  
    const handleClose = () => {
      setShowModal(false);
    };

    const handleShow = () => {
      setShowModal(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("URL:", url, "Query Value:", queryValue);
            console.log("GETTING")
            const response = await axios.get(url);
            setRes(Array.isArray(response.data) ? response.data : [response.data]);
            handleShow();
        } catch(error) {
            console.log('error: ', error);
        };
    }

    const handleChange = (e) => {
        setQueryValue(e.target.value);
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="ID">
                    {input && <Form.Control
                    type="text"
                    placeholder={`Enter ${qKey}`}
                    value={queryValue}
                    onChange={handleChange}
                    />}
                </Form.Group>
                <Button type="submit"> { btnLabel } </Button>
            </Form>
            <div>
                <Modal
                    show={showModal}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div>
                        {res && res.length > 0 ? (
                            res.map((entry) => (
                            <Details key={queryKey} entry={entry}/>
                        ))) : (<p> Nothing Found!</p>)}
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