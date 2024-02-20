import React from "react";
// import { Link } from "react-router-dom";
import Navigation from "./Nav";
import { Container, Row, Col } from "react-bootstrap";
import '../style/Header.css';

function Header() {
    return (
        <>
              <Container fluid className="bg-dark">
        <Row className="justify-content-center text-center mb-0">
        </Row>
        <header className="text-white" style={{ fontSize: "70px" }}>
        Alfredo Mercado
        </header>
      </Container>
      <Navigation />
        </>
    );
}

export default Header;