import { Row, Col, Container } from 'react-bootstrap';
import Sidebar from '../../Components/Explore/Sidebar'
import Properties from '../../Components/Explore/Properties'

const Explore = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={3}>
          <Sidebar />
        </Col>
        <Col xs={9}>
          <Properties/>
        </Col>
      </Row>
    </Container>
  );
}

export default Explore;
