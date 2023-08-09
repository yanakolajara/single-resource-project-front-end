import React, { useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card } from 'react-bootstrap';

import Rating from '../components/Rating';
import Loading from '../components/Loading';

import { getRecipeById } from '../Api/Api';
import { useAppContext } from '../context/AppContext';

const Recipe = () => {
  const { selectedRecipe, setSelectedRecipe, setIsLoading } = useAppContext();

  const { id } = useParams();

  const fetchRecipeById = useCallback(async () => {
    try {
      let result = await getRecipeById(id);

      setSelectedRecipe(result.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [id, setSelectedRecipe, setIsLoading]);

  useEffect(() => {
    fetchRecipeById();
  }, [fetchRecipeById]);

  if (!selectedRecipe) {
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
              // value={selectedRecipe.rating}
              // text= {`{selectedRecipe.numOfReviews} reviews`}
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
