import '../styles/EventCalendar.css';
import axios from 'axios';
import NavBar from '../components/NavBar';
import GetBtn from '../components/GetButton/GetBtn';
import { useEffect, useState } from 'react';
import { Card, Row, Col, Dropdown, ButtonGroup, Container } from 'react-bootstrap';

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [eventDates, setEventDates] = useState([]);

  // get the entire event list
  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        // Make a GET request and extract only the dates from the response
        // date attributes match the format of React's Date() object
        const res = await axios.get('localhost:4000/api/eventList');
        const dates = res.data.map(entry => entry.date);
        setEventDates(dates);
      } catch (error) {
        console.log('error: ', error);
      }
    };

    // Call the fetch data function
    fetchData();

    // Cleanup function (optional)
    return () => {
      // Any cleanup code can go here
    };
  }, []);
  // if selectedDate is in parsed eventDate array
  // if 
  // change color

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleMonthChange = (month) => {
    setSelectedDate(new Date(selectedDate.getFullYear(), month, selectedDate.getDate()));
  };

  const handleYearChange = (year) => {
    setSelectedDate(new Date(year, selectedDate.getMonth(), selectedDate.getDate()));
  };

  // function to build arrays representing weeks on a calendar
  function generateDaysArray(eventDates, selectedDate) {
    const daysArray = [];
    const daysInMonth = getDaysInMonth(selectedDate.getFullYear(), selectedDate.getMonth());
    const firstDayOfMonth = getFirstDayOfMonth(selectedDate.getFullYear(), selectedDate.getMonth());

    // Add empty slots for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push(null);
    }

    // Add the days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const monthDatePair = [selectedDate.getMonth() + 1, i]
      daysArray.push(i);
    }

    // Add empty slots for remaining days to fill 5 weeks (35 days)
    const remainingDays = 35 - daysArray.length;
    for (let i = 0; i < remainingDays; i++) {
      daysArray.push(null);
    }

    return daysArray;
  };

  return (
    <div className="calendar">
      <Col className='sidebar'/>
      <Col className="mainCol">
        <NavBar />
        <Container className="calendar-container">
          <Row>
            <h2>{months[selectedDate.getMonth()]} {selectedDate.getFullYear()}</h2>
          </Row>
          <Row className="mb-3">
            <Col>
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle variant="secondary">Select Month</Dropdown.Toggle>
                <Dropdown.Menu>
                  {months.map((month, index) => (
                    <Dropdown.Item key={index} onClick={() => handleMonthChange(index)}>{month}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col>
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle variant="secondary">Select Year</Dropdown.Toggle>
                <Dropdown.Menu>
                  {Array.from({ length: 10 }, (_, i) => selectedDate.getFullYear() - 5 + i).map((year, index) => (
                    <Dropdown.Item key={index} onClick={() => handleYearChange(year)}>{year}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Row className="days-of-week">
            {days.map(day => (
              <Col key={day} className="day-of-week">{day}</Col>
            ))}
          </Row>
          <div className="calendar-grid">
            {[...Array(Math.ceil(generateDaysArray().length / 7))].map((_, rowIndex) => (
              <Row key={rowIndex}>
                {generateDaysArray().slice(rowIndex * 7, (rowIndex + 1) * 7).map((day, index) => (
                  <Col key={index} className="mb-3">
                  {day !== null ? (
                    <Card
                      className={`calendar-card`}
                      onClick={() => handleDateClick(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day))}
                    >
                      <Card.Body>
                        <div>
                          <div>{day}</div>
                          {<div><Container /></div>}
                        </div>
                      </Card.Body>
                    </Card>
                  ) : day !== null && eventDates.includes(0) ? (
                    <Card
                      className={`calendar-card-event`}
                    >
                      <Card.Body>
                        <div>
                          <div>{day}</div>
                        </div>
                      </Card.Body>
                    </Card>
                  ) : (
                    <Card
                      className={`calendar-card-null`}
                    >
                      <Card.Body>
                        <div>
                          <div>{day}</div>
                        </div>
                      </Card.Body>
                    </Card>
                  )}
                  </Col>
                ))}
              </Row>
            ))}
          </div>
        </Container>
      </Col>
      <Col className='sidebar'/>
    </div>
  );
};

export default Calendar;