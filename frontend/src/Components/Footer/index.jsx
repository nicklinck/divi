import React from "react";
import { Row, Container, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css'
  
const Footer = () => {
  return (
    <div className="Box">
      <h1 style={{ 
        color: "green", 
        textAlign: "center", 
        marginTop: "-2rem" 
      }}>
        Divi Dao: NFTs Real estate
      </h1>
      <Container className="Footer-Container">
        <Row >
          <Col className="Column">
            <header className="Heading" >About Us</header>
            <Link className="FooterLink" to="#">Aim</Link>
            <Link className="FooterLink" to="#">Vision</Link>
            <Link className="FooterLink" to="#">Testimonials</Link>
          </Col>
          <Col className="Column">
            <header className="Heading" >Services</header>
            <Link className="FooterLink" to="#">Writing</Link>
            <Link className="FooterLink" to="#">Internships</Link>
            <Link className="FooterLink" to="#">Coding</Link>
            <Link className="FooterLink" to="#">Teaching</Link>
          </Col>
          <Col className="Column">
            <header className="Heading" >Contact Us</header>
            <Link className="FooterLink" to="#">Uttar Pradesh</Link>
            <Link className="FooterLink" to="#">Ahemdabad</Link>
            <Link className="FooterLink" to="#">Indore</Link>
            <Link className="FooterLink" to="#">Mumbai</Link>
          </Col>
          <Col className="Column">
            <header className="Heading">Social Media</header>
            <Link to="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </Link>
            <Link to="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </Link>
            <Link to="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </Link>
            <Link to="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;