import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from 'react-bootstrap';
import Filters from '../../../Components/Explore/Filters';
import './styles.css';

const Sidebar = () => {
  return (
    <>
      <Row className="Header">
        <header> Filters </header>
      </Row>
      <Row className="Filters">
        <Filters />
      </Row>
    </>
  );
}

export default Sidebar;
