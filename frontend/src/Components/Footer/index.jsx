import React from "react";
import { Row, Container, Col, Dropdown, InputGroup, FormControl } from 'react-bootstrap';
import './styles.css'
  
const Footer = () => {
  const sendEmail = () => {
    console.log('Clicked')
  }

  return (
    <div className="Box">
      <Container className="Footer-Container">
        <Row >
          <Col className="col-8">
            <div>
              <h1 className="Title"> <strong> Get the latest updates on Divi-DAO </strong> </h1>
              <InputGroup className="mb-3">
                <FormControl
                  id="Get-In"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text 
                  id="Im-In" 
                  onClick={() => sendEmail()} 
                > I'm In 
                </InputGroup.Text>
              </InputGroup>
              <div className="Icons" >
                <img className="Icon" src="/images/purpleTwitter.png" alt="Logo" />
                <img className="Icon" src="/images/purpleMedium.png"  alt="Logo" />
                <img className="Icon" src="/images/purpleDiscord.png" alt="Logo" />
              </div>
            </div>
          </Col>
          <Col className="Column">
            <header className="Heading"> Resources </header>
            <a href="/explore">
              <span> About </span>
            </a>
            <a href="https://twitter.com/divi_dao">
              <span> Twitter </span>
            </a>
            <a href="/explore">
              <span> Discord </span>
            </a>
            <a href="/explore">
              <span> Explore Properties </span>
            </a>
            <a href="/explore">
              <span> Sel your property </span>
            </a>
            <a href="/explore">
              <span> Smart contract </span>
            </a>
            <a href="/explore">
              <span> Contact us </span>
            </a>
            <Dropdown.Divider />
          </Col>
          <Row>
            <div className="Policy">
              <p> Divi-DAO, All rights reserved </p>
              <p> Privacy Policy                </p>
              <p> Terms of service              </p> 
            </div>
          </Row>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;