import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const SingleRecipe = ({ recipe }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/recipe/${recipe.id}`}>
        <Card.Img src={recipe.photo} alt="recipe-image" variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/recipe/${recipe.id}`}>
          <Card.Title as="div" className="recipe-title">
            {recipe.name}
          </Card.Title>
        </Link>
        <Card.Text as="p">Type: {recipe.type}</Card.Text>
        <Card.Text as="div">
          <Rating
            value={recipe.rating}
            text={`${recipe.numOfReviews} reviews`}
          />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleRecipe;
