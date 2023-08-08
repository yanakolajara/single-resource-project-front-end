import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card } from 'react-bootstrap';
// import Axios from 'axios';

import Rating from '../components/Rating';
import Loading from '../components/Loading';

import { getRecipeById, getRecipeReviews } from '../Api/Api';

const Recipe = () => {
  const [recipe, setRecipe] = useState(null);
  const [reviewsCount, setReviewsCount] = useState(0);
  const [reviewsRating, setReviewsRating] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [reviewsLoading, setReviewsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    fetchRecipeById();
    fetchRecipeReviews();
    // eslint-disable-next-line
  }, []);

  async function fetchRecipeById() {
    try {
      let result = await getRecipeById(id);

      setRecipe(result.data);
      // console.log(result.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  async function fetchRecipeReviews() {
    try {
      let result = await getRecipeReviews(id)
      if(!result.data){
        setReviewsCount(0)
        setReviewsRating(0)
      }else if(result.data.length === 1){
        setReviewsCount(1)
        setReviewsRating(result.data[0].rating)
      }else{
        const reviewsAverage = result.data.reduce((x,y) => Number(x.rating) + Number(y.rating)) / result.data.length;
        setReviewsCount(result.data.length)
        setReviewsRating(Math.round(reviewsAverage * 2) / 2)
      }
      setReviewsLoading(false)
    } catch (error) {
      console.log(error)
      setReviewsLoading(false)
    }
  }
  if (isLoading && reviewsLoading) {
    return <Loading center />;
  }

  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={recipe.photo} alt={recipe.name} fluid />
        </Col>
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{recipe.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={reviewsRating}
                text={`${reviewsCount} reviews`}
              />
              <Link
                to={`/recipes/${recipe.id}/reviews`}
                className="btn btn-primary mt-2"
              >
                View Reviews
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Description:</h5>
              <p>{recipe.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={6} className="my-2">
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h5>Ingredients:</h5>
                <span>{recipe.ingredients}</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>
                  Cuisine: <span>{recipe.cuisine}</span>
                </h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>
                  Type: <span>{recipe.type}</span>
                </h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>
                  Difficulty: <span>{recipe.difficulty}</span>
                </h5>
              </ListGroup.Item>
              {/* <ListGroup.Item>
                <h5>
                  Cooking Time: <span>{recipe.cookingTime}</span>
                </h5>
              </ListGroup.Item> */}
            </ListGroup>
          </Card>
        </Col>
        <Col className="my-2">
          <Card>
            <ListGroup>
              <ListGroup.Item>
                <h5>Nutrition Facts</h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>
                  Lorem ipsum dolor sit amet. A doloribus cupiditate non laborum
                  sint sit laudantium reprehenderit ab officiis tempore sit
                  natus itaque qui libero facere et blanditiis voluptatibus! Eum
                  impedit Quis est sunt eaque ut similique iusto est quos velit
                  33 possimus dignissimos sed galisum nesciunt nam repudiandae
                  similique. Rem quis facere ea laboriosam sint et odit expedita
                  sed dolorem veritatis.
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <h4>Properties:</h4>
                <p>{recipe.is_healthy ? 'Healthy' : 'Not Healthy'}</p>
                <p>{recipe.is_vegan ? 'Vegan' : 'Not Vegan'}</p>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Recipe;
