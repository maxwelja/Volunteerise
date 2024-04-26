import "bootstrap/dist/css/bootstrap.css";
import '../styles/Home.css';
import { Button, Container, Col, Row, Image} from 'react-bootstrap';
import NavBar from "../components/NavBar";

function Home() {
  return (
    <div className="volunteerProfile">
      <Row id="main">
          <Col id="mainCol">
            {/* <Container id="container1">
              <Col>
                <DropdownMenu />
              </Col>
              <Col id="logo">
              </Col>
              <Col id="title" xs={6} md={4}>
                Welcome!
              </Col>
              <Col xs={6} md={4}>
                <Container id="logo2">
                  <Image src="images/logo100.png" />
                </Container>
              </Col>
            </Container> */}

            <NavBar/>

            <Row id="row2">
              <Col>
                < Container id="container2">
                  <Col>
                    <Image className="logo-image" alt="logo" src="images/logoBig.png"/>
                  </Col>
                </Container>
              </Col>
            </Row>
            <div className='box' id='box1'>
              <Container id="container3">
                <Button variant='primary' size="lg" id="btn1">Profile</Button>
                <Button variant='primary' size="lg" id="btn2">Events Calendar</Button>
                <Button variant='primary' size="lg" id="btn3"> Event List</Button>
                <Button variant='primary' size="lg" id="btn4">Volunteer Hours</Button>
              </Container>
              <Col id="bot-right">
              </Col>
            </div>
          </Col>
      </Row>
    </div>
  );
}

export default Home;
