import { Row, Button, Container } from 'react-bootstrap';
import Property from '../../../Components/Explore/Property'
import { useNavigate } from 'react-router-dom';

const PropertyView = () => {
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
      </Row>
    </Container>
  );
}

export default PropertyView;
