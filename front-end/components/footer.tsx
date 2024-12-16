import { Col, Container, Nav, NavLink, Row, Stack } from "react-bootstrap";
import Logo from "/public/images/PlanArtsLogo.png";
import { Link } from "react-router-dom";

function Footer () {
    return (
        <footer>
            <Container fluid>
                <Row className="bg-dark text-white fixed-bottom">
                    <Col>
                        <Stack>
                            <img src= {Logo.src} alt="PlanArts Logo" width={150} height={150} />
                        </Stack>
                    </Col>
                    <Col>
                        <Nav className="flex-column fs-5">
                            <h4>Links ⬇️</h4>
                            <NavLink className="text-white" href="/">Home</NavLink>
                            <NavLink className="text-white" href="/practices">Practices</NavLink>
                            <NavLink className="text-white" href="/register">Register</NavLink>
                            <NavLink className="text-white" href="/login">Login</NavLink>
                        </Nav>

                    </Col>
                    <Col>
                        <h4>Contact us!</h4>
                        <p>+32 123 45 67</p>
                        <p>BvWw7@example.com</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;