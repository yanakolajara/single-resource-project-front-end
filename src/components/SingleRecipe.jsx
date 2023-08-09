import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const SingleRecipe = ({ id, photo, name, type }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/recipes/${id}`} className="m-1">
        <Card.Img
          src={photo}
          alt="recipe-image"
          variant="top"
          className="object-fit-cover"
          style={{
            width: '270px',
            height: '250px',
          }}
        />
      </Link>
      <Card.Body>
        <Link to={`/recipes/${id}`}>
          <Card.Title as="div" className="recipe-title">
            {name}
          </Card.Title>
        </Link>
        <Card.Text as="p">Type: {type}</Card.Text>
        <Card.Text as="div">
          <Rating
          // value={rating}
          // text={`${reviews.length} reviews`}
          />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleRecipe;
