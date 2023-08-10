import React, { useCallback, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Button } from 'react-bootstrap';

import { Review, ReviewForm } from '../components';

import { useAppContext } from '../context/AppContext';
import {
  getRecipeReviews,
  deleteRecipeReview,
  updateRecipeReview,
  createRecipeReview,
} from '../Api/Api';

const Reviews = () => {
  const { reviews, setReviews } = useAppContext();
  let { id } = useParams();

  const [editingReviewId, setEditingReviewId] = useState(null);
  const [addingReview, setAddingReview] = useState(false);

  const handleEditReview = (reviewId) => {
    setEditingReviewId(reviewId);
  };

  const handleReviewFormSubmit = async (updatedReview) => {
    try {
      await handleEditRecipeReview(updatedReview);
      setEditingReviewId(null);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const fetchRecipeReview = useCallback(async () => {
    try {
      let result = await getRecipeReviews(id);
      setReviews(result.data);
    } catch (error) {
      console.log(error);
    }
  }, [id, setReviews]);

  useEffect(() => {
    fetchRecipeReview();
  }, [fetchRecipeReview]);

  async function handleAdd(newReview) {
    try {
      let result = await createRecipeReview(id, newReview);
      setReviews([result.data, ...reviews]);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteClick(id) {
    try {
      await deleteRecipeReview(id);
      let filteredReviewArray = reviews.filter((item) => item.id !== id);
      setReviews(filteredReviewArray);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleEditRecipeReview(updatedReview) {
    try {
      const result = await updateRecipeReview(
        id,
        updatedReview.id,
        updatedReview
      );
      setReviews((prevReviews) =>
        prevReviews.map((review) =>
          review.id === updatedReview.recipeId ? result.data : review
        )
      );
      fetchRecipeReview();
    } catch (error) {
      alert('Sorry, you cannot update.');
      console.log(error);
    }
  }

  return (
    <Container className="py-5">
      <h1>Reviews</h1>
      <Link to={`/recipes/${id}`} className="btn btn-secondary my-3">
        Go Back
      </Link>
      <Row className="m-5">
        {addingReview ? (
          <ReviewForm
            handleAddClick={() => setAddingReview(false)}
            handleAdd={handleAdd}
          />
        ) : (
          <>
            {reviews ? (
              reviews.map((review) => (
                <div key={review.id}>
                  <Review
                    {...review}
                    handleDeleteClick={handleDeleteClick}
                    handleEditRecipeReview={handleEditRecipeReview}
                    handleEditReview={handleEditReview}
                    isEditing={editingReviewId === review.id}
                    onSubmitReview={handleReviewFormSubmit}
                    fetchRecipeReview={fetchRecipeReview}
                    handleAdd={handleAdd}
                    handleAddClick={() => setAddingReview(true)}
                  />
                  <hr />
                </div>
              ))
            ) : (
              <>
                <h1>No Reviews For This Recipe!</h1>
                <p>Be the first to review this recipe!</p>
                <Button onClick={() => setAddingReview(true)}>
                  Add Review
                </Button>
              </>
            )}
          </>
        )}
      </Row>
    </Container>
  );
};

export default Reviews;
