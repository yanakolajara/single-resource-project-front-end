import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import {
  getRecipeReviews,
  deleteRecipeReview,
  updateRecipeReview,
} from '../Api/Api';
import Review from './Review';
import { useAppContext } from '../context/AppContext';

const Reviews = () => {
  const { reviews, setReviews } = useAppContext();
  let { id } = useParams();
  console.log(id);

  console.log(reviews);

  const [editingReviewId, setEditingReviewId] = useState(null);

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
      <Row className="m-5">
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
              />
            </div>
          ))
        ) : (
          <h1>No Reviews For This Recipe!</h1>
        )}
      </Row>
    </Container>
  );
};

export default Reviews;
