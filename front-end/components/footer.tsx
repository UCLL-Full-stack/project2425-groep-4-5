import { Col, Container, Nav, NavLink, Row, Stack } from "react-bootstrap";
import Logo from "/public/images/PlanArtsLogo.png";
import { useTranslation } from "next-i18next";

function Footer() {
    const { t } = useTranslation();
    return (
        <footer>
            <Container fluid>
                <Row className="bg-dark text-white fixed-bottom">
                    <Col>
                        <Stack>
                            <img src={Logo.src} alt="PlanArts Logo" width={150} height={150} />
                        </Stack>
                    </Col>
                    <Col>
                        <Nav className="flex-column fs-5">
                            <h4>{t('footer.link')}</h4>
                            <NavLink className="text-white" href="/">{t('header.home')}</NavLink>
                            <NavLink className="text-white" href="/practices">{t('header.practices')}</NavLink>
                            <NavLink className="text-white" href="/register">{t('header.register')}</NavLink>
                            <NavLink className="text-white" href="/login">{t('header.login')}</NavLink>
                        </Nav>

                    </Col>
                    <Col>
                        <h4>{t('footer.contact')}</h4>
                        <p>+32 123 45 67</p>
                        <p>BvWw7@example.com</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;