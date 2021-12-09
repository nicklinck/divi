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
              <Link className="link" to={routes.landing}> Divi Dao </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link >
                  <Link className="link" to={routes.landing}> Home </Link>
                </Nav.Link>
                <Nav.Link >
                  Explore
                </Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item >Action</NavDropdown.Item>
                  <NavDropdown.Item >Another action</NavDropdown.Item>
                  <NavDropdown.Item >Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item >
                    <Link style={{"text-decoration": "none"}} to={routes.signIn}> Sign In </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}

export default NavBarComponent;
