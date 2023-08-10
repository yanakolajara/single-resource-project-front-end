import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

const ReviewForm = ({
  review,
  onSubmitReview,
  updateReviewsCallback,
  isEditing,
  handleAdd,
}) => {
  let { id } = useParams();

  const navigate = useNavigate();
  const [updatedReview, setUpdatedReview] = useState({
    reviewer: '',
    title: '',
    content: '',
    rating: '',
    recipe_id: id,
  });

  useEffect(() => {
    if (review && isEditing) {
      setUpdatedReview(review);
    } else {
      setUpdatedReview({
        reviewer: '',
        title: '',
        content: '',
        rating: '',
        recipe_id: id,
      });
    }
  }, [review, isEditing, id, navigate]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEditing) {
      onSubmitReview(updatedReview);
      updateReviewsCallback();
    } else {
      handleAdd(updatedReview);
    }

    setUpdatedReview({
      reviewer: '',
      title: '',
      content: '',
      rating: '',
      recipe_id: id,
    });
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-5">
      {isEditing ? (
        <Form.Group className="mb-3" controlId="reviewer">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="reviewer"
            value={updatedReview.reviewer}
            onChange={handleInputChange}
          />
        </Form.Group>
      ) : null}
      <Form.Group className="mb-3" controlId="content">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={updatedReview.title}
          onChange={handleInputChange}
        />
        <Form.Label>Review</Form.Label>
        <Form.Control
          as="textarea"
          name="content"
          value={updatedReview.content}
          onChange={handleInputChange}
          rows={3}
          placeholder="Write Your Review Here..."
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Rating</Form.Label>
        <Form.Control
          type="number"
          name="rating"
          value={updatedReview.rating}
          onChange={handleInputChange}
          placeholder="Enter Your Rating"
          min="0"
          max="5"
          step="1"
        />
      </Form.Group>
      {isEditing ? (
        <>
          <Button type="submit" className="btn btn-primary mx-2">
            Save
          </Button>
          <Link to={`/recipes/${id}`} className="btn btn-secondary">
            Back
          </Link>
        </>
      ) : (
        <>
          <Button type="submit" className="btn btn-primary mx-2">
            Add Review
          </Button>
        </>
      )}
    </Form>
  );
};

export default ReviewForm;
