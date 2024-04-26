import { Container, Col } from 'react-bootstrap';

function EventDetails({entry}) {
    const title = Object.keys(entry)[1];
    const keys = Object.keys(entry).slice(2,-3);

    return(
        <div>
            <Container>
                <Col>
                    <p style={{ marginBottom: '0' }}><b>{entry[title]}</b></p>
                    {keys.map(key => (
                        <div key={key}>
                        <p style={{ marginBottom: '0' }}>{key}: {entry[key]}</p>
                        </div>
                    ))}
                    <p style={{ marginBottom: '0' }}>ID: {entry._id}</p>
                </Col>
            </Container>
        </div>
    )
}

export default EventDetails;