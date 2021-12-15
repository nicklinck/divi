import { Container, Row, Col, Button } from 'react-bootstrap';
import routes from '../../router/routeList';
import { Link } from 'react-router-dom';
import './styles.css'

const App = () => {
  return (
    <Container>
      <Row>
        <Col id="Landing-Right" className="col-9">
          <p className="Paragraph"> 
            <strong> Real Estate Needs 
              <span style={{ color: "blue" }}> Disruption </span>
            </strong>
          </p>
          <p className="Second-Paragraph"> Fractionalized, on-chain ownership disrupts hard. Find out what’s now possible </p>
          <div style={{ display: "flex" }}>
            <Button className="Landing-Button">
              <Link to={routes.explore} >        <p> Buy Property  </p> </Link> 
            </Button>
            <Button className="Landing-Button"> 
              <Link to={routes.propertyCreate} > <p> Sell Property </p> </Link> 
            </Button>
          </div>
        </Col>
        {/*<Col id="Landing-Left" className="col-3">*/}
        {/*  <Row>*/}
        {/*    <Button className="Landing-Connect" href={routes.signIn}> Connect </Button >*/}
        {/*  </Row>*/}
        {/*  <Row>*/}
        {/*    <img className="Landing-Photo" src="/images/landingImage.png" alt="Logo" />*/}
        {/*  </Row>*/}
        {/*</Col>*/}
      </Row>
    </Container>
  ); 
}

export default App;
 