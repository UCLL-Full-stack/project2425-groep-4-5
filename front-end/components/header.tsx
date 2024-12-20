import React from 'react';
import Link from 'next/link';
import Logo from "/public/images/PlanArtsLogo.png";
import Button from "react-bootstrap/Button";
import { useRouter } from 'next/router';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Language from "@components/language/Language";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import { GetServerSidePropsContext } from "next";

const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="/">
            <img
              src={Logo.src}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="PlanArts Logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">{t('header.home')}</Nav.Link>
            <Nav.Link href="/practices">{t('header.practices')}</Nav.Link>
            <Nav.Link href="/register">{t('header.register')}</Nav.Link>
            <Nav.Link href="/login">{t('header.login')}</Nav.Link>
            <Language></Language>
          </Nav>
        </Container>
      </Navbar>
  );
};

export default Header;