import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card } from 'react-bootstrap';

import { Rating, Loading } from '../components';

import { getRecipeById, getRecipeReviews } from '../Api/Api';

const Recipe = () => {
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [reviewCount, setReviewCount] = useState(0);
  const [reviewAverage, setReviewAverage] = useState(0);

  const { id } = useParams();

  const fetchRecipeById = useCallback(async () => {
    try {
      let recipeObj = await getRecipeById(id);
      let reviewObj = await getRecipeReviews(id);

      if (!!reviewObj.data) {
        setReviewCount(reviewObj.data.length);
        if (Number(reviewObj.data.length) !== 1) {
          setReviewAverage(
            Math.round(
              (reviewObj.data.reduce(
                (x, y) => Number(x.rating) + Number(y.rating)
              ) /
                reviewObj.data.length) *
                2
            ) / 2
          );
        } else {
          setReviewAverage(reviewObj.data[0].rating);
        }
      }
      setRecipe(recipeObj.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchRecipeById();
  }, [fetchRecipeById]);
  console.log(recipe);

  if (isLoading) {
    return <Loading center />;
  }

  const {
    name,
    photo,
    description,
    ingredients,
    cuisine,
    type,
    difficulty,
    is_healthy,
    is_vegan,
    carbohydrates,
    calories,
    fat,
    protein,
    sugar,
  } = recipe;

  return (
    <>
      <Link to="/" className="btn btn-light my-3" id="recipePageBackButton">
        Go Back
      </Link>
      <Row>
        <Col md={6} id="recipePageImgCol">
          <Image
            className="object-fit-cover rounded"
            src={photo}
            alt={name}
            id="recipePageImg"
            fluid
            style={{ height: '500px', width: '600px' }}
          />
        </Col>

        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={reviewAverage} text={`${reviewCount} reviews`} />
              <Link
                to={`/recipes/${id}/reviews`}
                className="btn btn-primary mt-2"
                id="recipePageReviewsButton"
              >
                View Reviews
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="mb-3">
              <h5>Description:</h5>
              <p>{description}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Ingredients:</h5>
              <span>{ingredients}</span>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={6} className="my-2">
          <Card className="h-100">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <p>
                  Cuisine: <span>{cuisine}</span>
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>
                  Type: <span>{type}</span>
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>
                  Difficulty: <span>{difficulty}</span>
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Facts:</h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>{is_healthy ? 'Healthy' : 'Not Healthy'}</p>
                <p>{is_vegan ? 'Vegan' : 'Not Vegan'}</p>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col className="my-2">
          <Card className="h-100">
            <ListGroup>
              <ListGroup.Item>
                <h5>Nutrition Stats:</h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>
                  Calories: <span>{calories}</span>
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>
                  Carbs: <span>{carbohydrates}</span>
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>
                  Fat: <span>{fat}</span>
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>
                  Protein: <span>{protein}</span>
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>
                  Sugar: <span>{sugar}</span>
                </p>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Recipe;
