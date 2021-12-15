import { Container, Row } from 'react-bootstrap';
import Property from '../Property'
import Filters from '../../../Components/Explore/Filters'
import './styles.css';

const Properties = () => {
  return (
    <>
      <Row className="Properties-filters">
        <Filters className="Filters" />
      </Row>
      <Container>
        <Row className="Properties">
          <Property className="Property" propertyId={1} title="Miami Penthouse" text="Miami, FL- USA" price="186.87 ETH" rooms="5 bed rooms" />
          <Property className="Property" propertyId={2} title="Miami Penthouse" text="Miami, FL- USA" price="186.87 ETH" rooms="5 bed rooms" />
          <Property className="Property" propertyId={3} title="Miami Penthouse" text="Miami, FL- USA" price="186.87 ETH" rooms="5 bed rooms" />
          <Property className="Property" propertyId={4} title="Miami Penthouse" text="Miami, FL- USA" price="186.87 ETH" rooms="5 bed rooms" />
          <Property className="Property" propertyId={5} title="Miami Penthouse" text="Miami, FL- USA" price="186.87 ETH" rooms="5 bed rooms" />
          <Property className="Property" propertyId={6} title="Miami Penthouse" text="Miami, FL- USA" price="186.87 ETH" rooms="5 bed rooms" />
        </Row>
      </Container>
    </>
  );
}

export default Properties;
