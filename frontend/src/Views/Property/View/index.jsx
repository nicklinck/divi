import { Row, Button, Container, Carousel, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';  
import { mdiArrowLeft } from '@mdi/js';
import routes from '../../../router/routeList';
import './styles.css';

const PropertyView = () => {

  const purchaseProperty = () => {
    console.log('Clicked')
  }

  return (
    <Container>
      <Row>
        <div className="Property-header">
          <Link className="link" to={routes.explore} > 
            <Icon className="Icon" path={mdiArrowLeft} size={1.8} />
          </Link>
          <mdiFilter />
          <Button onClick={() => purchaseProperty()}> Buy Now <mdiPlusCircleOutline /></Button>
        </div>
      </Row>
      <Row style={{justifyContent: "center"}}>
        <Carousel className="Carousel">
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={'/images/example5.png'}
              alt="First slide"
              thumbnail
            />
            <Carousel.Caption> <h3>First</h3> </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={'/images/example4.png'}
              alt="Second slide"
            />
            <Carousel.Caption> <h3>Second</h3> </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={'/images/example5.png'}
              alt="Third slide"
            />
            <Carousel.Caption> <h3>Third</h3> </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
}

export default PropertyView;
