import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card } from 'react-bootstrap';
import Rating from '../components/Rating';
import { recipes } from '../recipe';

const Recipe = () => {
  const { id } = useParams();
  const recipe = recipes.find((item) => item.id === +id);

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
                value={recipe.rating}
                text={`${recipe.numOfReviews} reviews`}
              />
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
                <ul>
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
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
              <ListGroup.Item>
                <h5>
                  Cooking Time: <span>{recipe.cookingTime}</span>
                </h5>
              </ListGroup.Item>
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
