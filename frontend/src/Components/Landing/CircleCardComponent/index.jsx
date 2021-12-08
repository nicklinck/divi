import { Container, Row, Col, Image } from 'react-bootstrap';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CircleCardComponent = () => {
  return (
    <Container>
      <header className="title">Contributors</header>
      <Row>
        <Col col="2" md={2}>
          <Image className="circular" src={'/images/example4.png'} fluid />
        </Col>
        <Col col="2" md={2}>
          <Image className="circular" src={'/images/example4.png'} fluid />
        </Col>
        <Col md={2}>
          <Image className="circular" src={'/images/example4.png'} fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default CircleCardComponent;
