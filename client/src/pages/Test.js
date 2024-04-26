import '../styles/VolunteerProfile.css'
import React, { useState } from 'react';
import {Button, Container, Form} from 'react-bootstrap';
import GetBtn from '../components/GetButton/GetBtn';
import DropdownMenu from '../components/DropdownMenu';
import Details from '../components/GetButton/Details';

function Test({username}) {

  return (
    <div className="d-flex justify-content-center" style={{marginTop: '10px'}}>
      <DropdownMenu />
      <Container>
        <GetBtn btnLabel="Get It" collection="events" queryKey="title" input={true} />
        <GetBtn btnLabel="Get It" collection="events" queryKey="organization" input={true} />
        <GetBtn btnLabel="Get It" collection="events" queryKey="location" input={true} />
        <p>{username}</p>
      </Container>
    </div>
  );
}

export default Test;