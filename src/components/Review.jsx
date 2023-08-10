import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import Rating from './Rating';
import ReviewForm from './ReviewForm';

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
}) => {
  const [editedReview, setEditedReview] = useState({
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  return (
    <Container>
      <Card border="light" className="mb-5" id='reviewCard'>
        <Card.Body>
          <div className="d-flex align-items-center mb-3">
            <FaUserCircle
              className="rounded"
              style={{ width: '60px', height: '60px', marginRight: '10px' }}
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
              onCancelEdit={handleCancelEdit}
              onSubmitReview={onSubmitReview}
              onInputChange={handleInputChange}
              updateReviewsCallback={fetchRecipeReview}
            />
          ) : (
            <Card.Text>{content}</Card.Text>
          )}
          <div
            className="d-flex justify-content-end"
            style={{ marginRight: '5rem' }}
          >
            {isEditing ? (
              <>
                <Button
                  variant="primary"
                  className="mr-2"
                  style={{ marginRight: '1rem' }}
                  onClick={handleCancelEdit}
                >
                  Cancel
                </Button>
                {/* <Button
                  type="submit"
                  className="btn btn-primary"
                  style={{ marginRight: '1rem' }}
                >
                  Save
                </Button> */}
              </>
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
              variant="primary"
              onClick={() => handleDeleteClick(id)}
              disabled={isEditing}
              id='removeReviewButton'
            >
              Remove
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Review;
