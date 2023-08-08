import React from 'react';
import { Form } from 'react-bootstrap';

const ReviewForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="reviewer">
        <Form.Label htmlFor="name">Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="content">
        <Form.Label htmlFor="title">Recipe Name</Form.Label>
        <Form.Control type="text" placeholder="Recipe Title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="content">
        <Form.Label htmlFor="content">Review</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Write Your Review Here..."
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="rating">
        <Form.Label htmlFor="rating">Rating</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Your Rating"
          min="0"
          max="5"
          step="1"
        />
      </Form.Group>
    </Form>
  );
};

export default ReviewForm;
