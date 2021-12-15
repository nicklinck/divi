import { Container, Button, Row, Col, Form, InputGroup, Image } from 'react-bootstrap';
import { useState } from 'react';
import './styles.css';

function PropertyCreate() {
  const [image, setImage] = useState(null);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
   }

  return (
    <Container fluid>
      <Row>
        <div className="Property-header">
          <h3> Create Property </h3>
        </div>
      </Row>
      <Row>
        <Col id="Image" className="col-6">
        <img id="target" alt="property" />
          <Image style={{ width: "70%", height: "auto" }} 
            fluid
            src={image}
            className="Property-Image"
          />
          <Form className="form" noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-4">
              <Form.Group md="5" controlId="formFile">
                <Form.Label> Image </Form.Label>
                <InputGroup hasValidation>
                  <Form.Control 
                    required
                    type="file"
                    multiple
                    onChange={ onImageChange }
                  />
                  <Form.Control.Feedback type="invalid">
                    Required Field.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
          </Form>
        </Col>
        <Col md={4}>
          <Form className="form" noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-4">
              <Form.Group md="10" controlId="validationCustom01">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Price"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                    Required Field.
                  </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-4">
              <Form.Group md="10" controlId="validationCustom02">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Location"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                    Required Field.
                  </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-4">
              <Form.Group md="10" controlId="validationCustomNumberOfBeds">
                <Form.Label>Number Of Beds</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Number Of Beds"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Required Field.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group md="10" controlId="validationCustom03">
                <Form.Label>Number Of Baths</Form.Label>
                <Form.Control type="text" placeholder="Number Of Baths" required />
                <Form.Control.Feedback type="invalid">
                  Required Field.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Form.Group className="mb-4">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default PropertyCreate;
