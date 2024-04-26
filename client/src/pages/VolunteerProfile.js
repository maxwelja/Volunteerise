import '../styles/VolunteerProfile.css';
import { Button, Container, Col, Row, Image} from 'react-bootstrap';
import NavBar from '../components/NavBar';
import GetBtn from '../components/GetButton/GetBtn';
import { useEffect, useState } from 'react';
import axios from 'axios';

function VolunteerProfile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    let isMounted = true;

    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:4000/api/users');

        if (isMounted) {
          // Update state only if the component is still mounted
          setUserData(res.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();

    // Cleanup function: runs when the component is unmounted
    return () => {
      isMounted = false; // Set isMounted to false to indicate that the component is unmounted
    };
  }, []);

  const update = () => {
    setUserData(prevState => !prevState)
  }

  return (
    <>
    <div id="main">
        <Col id="sidebar"></Col>
          <Container id='mainContainer'>
            <Col id="mainCol">
              <NavBar />

              <Row id="row2">
                <Col id="profile">
                  <Image src="images/profilePic.png" />
                </Col>
                <Col>
                  < Container id="container2">
                      <Container id="infoContainer">
                          <Row>Name: Jacob Maxwell</Row>
                          <Row>Email: jam190009@utdallas.edu</Row>
                          <Row>Phone: (123)456-7890</Row>
                          <Row>Summary:<br />Hello, my name is Jacob and I volunteer! and stuff and things and yippee</Row>
                      </Container>
                  </Container>
                </Col>
              </Row>

              <div className='box' id='box1'>
                <Col id='bot-left'>
                <Container id="container3">
                  <div className='box' id='box2'>
                      <Col id='kRating'>
                      Karma<br />
                      Rating
                      </Col>
                      <Container id="karma">
                        0
                      </Container>
                  </div>
                  <Button onClick={update}
                      id='662750becc916920155933e1'
                      variant='primary'
                      > Get One
                  </Button>
                  <GetBtn btnLabel="All Events" collection="events" input="true"/>
                </Container>
                </Col>

                <Col id="bot-right">
                  <Container id="container4">
                  <div className='box' id='box3'>
                      <Col id="vhours">
                      Volunteer<br/>Hours
                      </Col>
                      <Container id="hours">
                        0
                      </Container>
                  </div>
                  <div className='box' id="box4">
                    <Col id="attended">
                      Events<br/>Attended
                    </Col>
                    <Container id="events">
                      0
                    </Container>
                  </div>
                  </Container>

                  <Container id="container5">
                  <div className='box' id='box4'>
                      <GetBtn color="black"
                        btnLabel="Show RSVP'd Events"
                        collection="rsvp"
                      />
                  </div>
                  </Container>
                </Col>
              </div>
            </Col>
          </Container>
        <Col id="sidebar"></Col>
      </div>
    </>
  );
}

export default VolunteerProfile;