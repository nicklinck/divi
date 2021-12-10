import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Filter from '../Filter';
import './styles.css';

const Filters = () => {
  return (
    <div className="Filters">
      <Filter />
      <Filter />
      <Filter />
    </div>
  );
}

export default Filters;
