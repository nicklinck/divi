import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Col, Row } from 'react-bootstrap';
import Filter from '../Filter';
import CountryFilters from '../CountryFilters';
import './styles.css';

const Filters = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Col style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Filter name={'Price'} />
          <Filter name={'Beds'} />
          <Filter name={'Rooms'} />
        </Col>
        <Col md="7">
          <CountryFilters />
        </Col>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Filters;
