import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Row, Col, ListGroup } from 'react-bootstrap';
import ReviewForm from './ReviewForm';
import { getRecipeReviews } from '../Api/Api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  let { id: recipeId } = useParams();

  useEffect(() => {
    fetchRecipeReview();
    // eslint-disable-next-line
  }, [recipeId]);

  async function fetchRecipeReview() {
    try {
      let result = await getRecipeReviews(recipeId);

      setReviews(result.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container className="py-3">
      <Row>
        <Col>
          <h1>Reviews</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <ListGroup>
              {reviews &&
                reviews.map((review) => (
                  <ListGroup.Item key={review.id}>
                    <h5>{review.reviewer}</h5>
                    <p>{review.title}</p>
                    <p>{review.content}</p>
                    <p>Rating: {review.rating}</p>
                  </ListGroup.Item>
                ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
      {/* <ReviewForm /> */}
    </Container>
  );
};

export default Reviews;
