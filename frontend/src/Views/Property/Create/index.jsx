import { Container, Button, Row, Col, Form, InputGroup } from 'react-bootstrap';
import { useState } from 'react';
import './styles.css';

function PropertyCreate() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
      <Row>
        <div className="Property-header">
          <h3> Create Property </h3>
        </div>
      </Row>
      <Row>
        <Form className="form" noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Price</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Price"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                  Please choose a price.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Location</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Location"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                  Please choose a location.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomNumberOfBeds">
              <Form.Label>Number Of Beds</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Number Of Beds"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a number of beds.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Number Of Baths</Form.Label>
              <Form.Control type="text" placeholder="Number Of Baths" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Number Of Baths.
              </Form.Control.Feedback>
            </Form.Group>
              <Form.Group as={Col} md="6" controlId="formFile">
                <Form.Label> Image </Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="file"
                    multiple 
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a image.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
          </Row>
          <Form.Group className="mb-5">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      </Row>
    </Container>
  );
}

export default PropertyCreate;
