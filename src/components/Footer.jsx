import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container className="py-2 bg-dark d-flex justify-content-around" fluid>
        <p className="text-white">Recipe</p>
        <p className="text-white">&copy; {new Date().getFullYear()}</p>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </Container>
    </footer>
  );
};

export default Footer;
