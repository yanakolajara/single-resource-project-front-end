import React from 'react';

import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const SingleRecipe = ({ recipe }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/recipes/${recipe.id}`}>
        <Card.Img
          src={recipe.photo}
          alt="recipe-image"
          variant="top"
          style={{ width: '250px', height: '250px' }}
        />
      </Link>
      <Card.Body>
        <Link to={`/recipes/${recipe.id}`}>
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
