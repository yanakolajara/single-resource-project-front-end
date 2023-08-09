
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import { Row, Col, Image, ListGroup, Card } from 'react-bootstrap';

import Rating from '../components/Rating';
import Loading from '../components/Loading';


import { getRecipeById, getRecipeReviews } from '../Api/Api';

const Recipe = () => {
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [reviewCount, setReviewCount] = useState(0);
  const [reviewAverage, setReviewAverage] = useState(0);
  const navigate = useNavigate();

  const { id } = useParams();

  const fetchRecipeById = async () => {
    try {
      let recipeObj = await getRecipeById(id);
      let reviewObj = await getRecipeReviews(id);
      if(!!reviewObj.response){navigate('error')}
      if(!!reviewObj.data){
        setReviewCount(reviewObj.data.length)
        if(Number(reviewObj.data.length) !== 1){
          setReviewAverage(Math.round((reviewObj.data.reduce((x,y) => Number(x.rating) + Number(y.rating)) / reviewObj.data.length) * 2) / 2)
        }else{
          setReviewAverage(reviewObj.data[0].rating)
        }
      }
      setRecipe(recipeObj.data);
      // console.log(result.data);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
                           
  useEffect(() => {
    fetchRecipeById();
  }, []);

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
  } = selectedRecipe;

  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={photo} alt={name} fluid />
        </Col>
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={reviewAverage}
                text={`${reviewCount} reviews`}
              />
              <Link
                to={`/recipes/${id}/reviews`}
                className="btn btn-primary mt-2"
              >
                View Reviews
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Description:</h5>
              <p>{description}</p>
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
                <span>{ingredients}</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>
                  Cuisine: <span>{cuisine}</span>
                </h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>
                  Type: <span>{type}</span>
                </h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>
                  Difficulty: <span>{difficulty}</span>
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
                <p>{is_healthy ? 'Healthy' : 'Not Healthy'}</p>
                <p>{is_vegan ? 'Vegan' : 'Not Vegan'}</p>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Recipe;