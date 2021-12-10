import { Button, Row, Container } from 'react-bootstrap';
import Property from '../Property'
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Properties = () => {
  const navigate = useNavigate();

  const createProperty = () => {
    navigate(`/property/create`)  
  }

  return (
    <Container>
      <Row>
        <div className="Properties-header">
          <header> Properties </header>
          <Button onClick={createProperty}> Create Property </Button>
        </div>
      </Row>
      <Row className="Properties">
        <Property className="Property" />
        <Property className="Property" />
        <Property className="Property" />
        <Property className="Property" />
        <Property className="Property" />
        <Property className="Property" />
      </Row>
    </Container>
  );
}

export default Properties;
