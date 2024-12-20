import React from "react";
import { Container, Row, Card, CardBody, Col, Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { GetServerSidePropsContext } from "next";

const UserLoginForm: React.FC = () => {
  const { t } = useTranslation();
    return (
        <Container fluid>

      <Row className='justify-content-center align-items-center m-5'>

        <Card>
          <CardBody className='px-4'>

            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>

            <Row>

              <Col md='6'>
                <h4>First Name</h4>
                <input type="text" className="form-control" id="registerName" placeholder="First Name"></input>
              </Col>

              <Col md='6'>
                <h4>Last Name</h4>
                <input type="text" className="form-control" id="registerLastName" placeholder="Last Name"></input>
              </Col>

            </Row>

            <Row>

              <Col md='6'>
                <h4>Birth Date</h4>
                <input type="date" className="form-control" id="registerDate"></input>
              </Col>

              <Col md='6' className='mb-4'>
                <h4 className="fw-bold">Gender: </h4>
                <Form.Check name='inlineRadio' id='radFem' value='option1' label='Female' inline />
                <Form.Check name='inlineRadio' id='radMale' value='option2' label='Male' inline />
                <Form.Check name='inlineRadio' id='radOth' value='option3' label='Other' inline />
              </Col>

            </Row>

            <Row>

              <Col md='6'>
                <h4>Email</h4>
                <input type="email" className="form-control" id="registerEmail" placeholder="Email"></input>
              </Col>

              <Col md='6'>
                <h4>Phone Number</h4>
                <input type="tel" className="form-control" id="registerPhone" placeholder="Phone Number"></input>
              </Col>

            </Row>
            <Row>
              <Col md='6'>
                <h4>Password</h4>
                <input type="password" className="form-control" id="inputPassword" placeholder="Password"></input>
              </Col>
            </Row>
            <Row>
            <Col md='6'>
                <h4>Repeat Password</h4>
                <input type="password" className="form-control" id="inputPasswordRepeat" placeholder="Repeat Password"></input>
              </Col>
            </Row>
            <Button className='mb-4' size='lg'>Register</Button>

          </CardBody>
        </Card>

      </Row>
    </Container>
    )
};

export default UserLoginForm;