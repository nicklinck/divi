import { Button, Row, Container } from 'react-bootstrap';
import Property from '../Property'
import Filters from '../../../Components/Explore/Filters'
import { useNavigate } from 'react-router-dom';
import Icon from '@mdi/react';  
import { mdiPlusCircleOutline } from '@mdi/js';
import './styles.css';

const Properties = () => {
  const navigate = useNavigate();

  const createProperty = () => {
    navigate(`/property/create`)  
  }

  return (
    <Container >
      <Row>
        <div className="Properties-header">
          <h3> Properties </h3>
        </div>
      </Row>
      <Row>
        <div className="Properties-filters">
          <Filters className="Filters" />
          <Button className="Properties-Button" onClick={createProperty}> Create Property           
            <Icon className="Create-Property-Icon" path={mdiPlusCircleOutline} size={1} />
          </Button>
        </div>
      </Row>
      <Row className="Properties">
        <Property className="Property" propertyId={1} title="Title" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
        <Property className="Property" propertyId={2} title="Title" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
        <Property className="Property" propertyId={3} title="Title" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
        <Property className="Property" propertyId={4} title="Title" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
        <Property className="Property" propertyId={5} title="Title" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
        <Property className="Property" propertyId={6} title="Title" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
      </Row>
    </Container>
  );
}

export default Properties;
