import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import routes from '../../../router/routeList';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBarComponent = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Divi Dao</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Explore</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item >Action</NavDropdown.Item>
                  <NavDropdown.Item >Another action</NavDropdown.Item>
                  <NavDropdown.Item >Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item >
                    <Link to={routes.signIn}> Sign In</Link>
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
