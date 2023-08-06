import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="py-3">
          <Col>
            <p>Recipe</p>
          </Col>
          <Col>
            <p>&copy; {new Date().getFullYear()}</p>
          </Col>
          <Col>
            <a href="/home">Home</a>
          </Col>
          <Col>
            <a href="/about">About</a>
          </Col>
          <Col>
            <a href="/features">Features</a>
          </Col>
          <Col>
            <a href="/contacts">Contact</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
