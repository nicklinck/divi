import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './styles.css'

const Filter = (props) => {
  return (
    <div className="Filter">
      <NavDropdown.Item > {props.name} </NavDropdown.Item>
    </div>
  );
}

export default Filter;
