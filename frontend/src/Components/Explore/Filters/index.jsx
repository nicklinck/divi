import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import Filter from '../Filter';
import Icon from '@mdi/react';
import { mdiFilter } from '@mdi/js';
import './styles.css';

const Filters = () => {
  return (
    <Container className="Filters">
    <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Icon path={mdiFilter} size={1} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"> 
              <NavDropdown title="Filters" id="basic-nav-dropdown">
                <Filter name={'Lowest Price'} />
                <Filter name={'Highest Price'} />
                <Filter name={'Number of beds'} />
                <Filter name={'Number of baths'} />
                <Filter name={'Number of shares'} />
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  </Container>
  );
}

export default Filters;
