import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Image from 'react-bootstrap/Image'; 
import Button from 'react-bootstrap/Button'; 

function HomePage() {
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col xs={4} sm={6}>
                    <Image src="/img/logo.png" fluid />
                </Col>
                <Col sm={6}>
                    <h1 className="font-weight-light">Contacts App</h1>
                    <p className="my-4">
                        Lorem ipsum
                        <br /><br />
                        Lorem ipsum dolor sit
                    </p>
                    <Button variant="outline-primary">Get Started &gt;&gt;</Button>
                </Col>
            </Row>
        </Container>
        )
}

export default HomePage; 