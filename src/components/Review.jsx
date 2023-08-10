import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { FaRegUser } from 'react-icons/fa';

import { Rating, ReviewForm } from '.';

const Review = ({
  id,
  reviewer,
  rating,
  content,
  title,
  handleDeleteClick,
  handleEditReview,
  fetchRecipeReview,
  isEditing,
  onSubmitReview,
  handleAddClick,
  handleAdd,
}) => {
  const [editedReview] = useState({
    id,
    reviewer,
    title,
    rating,
    content,
  });

  const handleEditClick = () => {
    handleEditReview(id);
  };

  const handleCancelEdit = () => {
    handleEditReview(null);
  };

  return (
    <Container>
      <Card border="light" className="my-3 p-3 h-100">
        <Card.Body>
          <div className="d-flex align-items-center mb-3">
            <FaRegUser
              className="rounded-circle text-light bg-secondary p-1"
              style={{ width: '40px', height: '40px', marginRight: '10px' }}
            />
            <Card.Title className="text-secondary">{reviewer}</Card.Title>
          </div>
          <div className="mb-3">
            <Rating value={rating} text={`${rating} reviews`} />
          </div>
          <Card.Title className="text-secondary">{title}</Card.Title>
          {isEditing ? (
            <ReviewForm
              review={editedReview}
              onSubmitReview={onSubmitReview}
              updateReviewsCallback={fetchRecipeReview}
              isEditing={isEditing}
              handleAdd={handleAdd}
            />
          ) : (
            <Card.Text>{content}</Card.Text>
          )}
          <div
            className="d-flex justify-content-center"
            style={{ marginRight: '5rem' }}
          >
            {isEditing ? (
              <Button
                variant="danger"
                className="mr-2"
                style={{ marginRight: '1rem' }}
                onClick={handleCancelEdit}
              >
                Cancel
              </Button>
            ) : (
              <Button
                variant="primary"
                className="mr-2"
                style={{ marginRight: '1rem' }}
                onClick={() => handleEditClick(id)}
              >
                Edit
              </Button>
            )}

            <Button
              variant="danger"
              onClick={() => handleDeleteClick(id)}
              disabled={isEditing}
            >
              Remove
            </Button>
            <Button
              variant="success"
              className="mr-2"
              style={{ marginLeft: '1rem' }}
              onClick={() => handleAddClick(id)}
            >
              Add
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Review;
