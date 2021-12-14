import { NavDropdown } from 'react-bootstrap';
import './styles.css'

const CountryFilter = (props) => {
  return (
    <div className="CountryFilter">
      <NavDropdown.Item > { props.name } </NavDropdown.Item>
    </div>
  );
}

export default CountryFilter;
