import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import routes from '../../../router/routeList';
import './styles.css';

const NavBarComponent = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>
              <img className="photo" src="/images/logo2.png" alt="Logo" />
              <Link className="link" to={routes.landing}> DiviDAO </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="link" href={routes.landing}> Home </Nav.Link >
                <Nav.Link className="link" href={routes.explore}> Explore </Nav.Link >
                <Nav.Link className="link" href={routes.signIn}> Sign In </Nav.Link >
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}

export default NavBarComponent;
