import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import routes from '../../../router/routeList';
import './styles.css';

const NavBarComponent = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand style={{alignItems: "center"}}>
              <img className="photo" src="/images/logo3.png" alt="Logo" />
              <Link className="link" to={routes.landing}> DiviDAO </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                <Nav.Link className="link" href={routes.landing}> Home </Nav.Link >
                <Nav.Link className="link" href={routes.explore}> Explore </Nav.Link >
                <Nav.Link className="link" href={routes.propertyCreate}> Create </Nav.Link >
                <Nav.Link className="link" href={routes.signIn}>  About </Nav.Link >
                <img className="photo" src="/images/discord.png" alt="Logo" />
                <img className="photo" src="/images/twitter.png" alt="Logo" />
                {/* <Button className="link" href={routes.signIn}>  Connect </Button > */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}

export default NavBarComponent;
