import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form } from 'react-bootstrap';

const ReviewForm = ({
  review,
  onCancelEdit,
  onSubmitReview,
  onInputChange,
  updateReviewsCallback,
}) => {
  let { id } = useParams();
  const [updatedReview, setUpdatedReview] = useState({
    reviewer: '',
    title: '',
    content: '',
    rating: '',
    recipe_id: id,
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitReview(updatedReview);
    updateReviewsCallback();
  };

  useEffect(() => {
    if (review) {
      setUpdatedReview(review);
    }
  }, [review]);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="reviewer">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="reviewer"
          value={review.reviewer}
          onChange={onInputChange}
          placeholder="Enter Your Name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="content">
        <Form.Label>Review</Form.Label>
        <Form.Control
          as="textarea"
          name="content"
          value={review.content}
          onChange={onInputChange}
          rows={3}
          placeholder="Write Your Review Here..."
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Rating</Form.Label>
        <Form.Control
          type="number"
          name="rating"
          value={review.rating}
          onChange={onInputChange}
          placeholder="Enter Your Rating"
          min="0"
          max="5"
          step="1"
        />
      </Form.Group>
      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-primary mr-2" id='reviewEditSubmitButton'>
          Save
        </button>
      </div>
    </Form>
  );
};

export default ReviewForm;
