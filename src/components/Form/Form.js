import { useState } from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import "./Form.css";

const StepForm = () => {
  const [step, setStep] = useState(1);

  function currentStep(step) {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 className="mb-5">Personal details</h2>
            <Row>
              {/* name */}
              <Col>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="name" placeholder="Enter name" />
                </Form.Group>
              </Col>
              {/* dob */}
              <Col>
                <Form.Group className="mb-3" controlId="formBasicDOB">
                  <Form.Label>BOD</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              {/* email */}
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Col>
              {/* phone */}
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                  <Form.Label>phone</Form.Label>
                  <Form.Control type="number" placeholder="Enter phone" />
                </Form.Group>
              </Col>
            </Row>
          </div>
        );

      case 2:
        return (
          <div>
            <h2 className="mb-5">Address</h2>
            <Row>
              {/* address 1 */}
              <Col>
                <Form.Group className="mb-3" controlId="formAddress1">
                  <Form.Label>Address 1</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>
              </Col>
              {/* address 2 */}
              <Col>
                <Form.Group className="mb-3" controlId="formAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>
              </Col>
            </Row>
          </div>
        );

      case 3:
        return (
          <div>
            <h2 className="mb-5">Payment details</h2>
            <Row>
              {/* card number */}
              <Col>
                <Form.Group className="mb-3" controlId="formBasicCardNumber">
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control type="number" placeholder="Enter card number" />
                </Form.Group>
              </Col>
              {/* cvv */}
              <Col>
                <Form.Group className="mb-3" controlId="formBasicCVV">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              {/* expire */}
              <Col>
                <Form.Group className="mb-3" controlId="formBasicExpir">
                  <Form.Label>Expire</Form.Label>
                  <Form.Control type="month" />
                </Form.Group>
              </Col>
              {/* postal code */}
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPostalCode">
                  <Form.Label>Postal code</Form.Label>
                  <Form.Control type="number" placeholder="Enter postal code" />
                </Form.Group>
              </Col>
            </Row>
          </div>
        );

      default:
        return "";
    }
  }

  function nextStep() {
    if (step < 3) {
      setStep(step + 1);
    }
  }

  function prevStep() {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  return (
    <Container className="pt-4">
      <div className="text-center">
        <h3>Step Form</h3>
        <div className="steps my-5">
          <span className={`${step >= 1 ? "bg-primary text-white" : "bg-light"} px-3 py-2 rounded`}>1</span>
          <span className={`${step >= 2 ? "bg-primary text-white" : "bg-light"} px-3 py-2 rounded`}>2</span>
          <span className={`${step === 3 ? "bg-primary text-white" : "bg-light"} px-3 py-2 rounded`}>3</span>
        </div>
      </div>
      <Form className="col-8 mx-auto border shadow p-5">
        {currentStep(step)}
        <Row className="mt-4">
          <Col className={`${step > 1 ? "" : "visually-hidden"}`}>
            <Button className={`${step > 1 ? "w-100" : ""}`} onClick={prevStep} variant="primary">
              Back
            </Button>
          </Col>
          <Col className={`${step < 3 ? "" : "visually-hidden"}`}>
            <Button className={`${step < 3 ? "w-100" : ""}`} onClick={nextStep} variant="primary">
              Next
            </Button>
          </Col>
          <Col className={`${step === 3 ? "" : "visually-hidden"}`}>
            <Button className={`${step === 3 ? "w-100" : ""}`} variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default StepForm;
