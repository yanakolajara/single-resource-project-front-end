import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

import { Rating } from '.';
import { getRecipeReviews } from '../Api/Api';

const SingleRecipe = ({ recipe }) => {
  const [reviewCount, setReviewCount] = useState(0);
  const [reviewAverage, setReviewAverage] = useState(0);

  const fetchReviews = useCallback(async () => {
    try {
      let reviewObj = await getRecipeReviews(String(recipe.id));
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
    } catch (error) {
      console.log(error);
    }
  }, [recipe.id]);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  return (
    <Card className="my-3 p-3 rounded" id="singleRecipeCard">
      <Link to={`/recipes/${recipe.id}`} className="m-1">
        <Card.Img
          src={recipe.photo}
          alt="recipe-image"
          variant="top"
          className="object-fit-cover"
          id="singleRecipeImg"
          style={{
            width: '270px',
            height: '250px',
          }}
        />
      </Link>
      <Card.Body>
        <Link to={`/recipes/${recipe.id}`}>
          <Card.Title as="div" className="recipe-title" id="singleRecipeName">
            {recipe.name}
          </Card.Title>
        </Link>
        <Card.Text as="p" id="singleRecipeType">
          Type: {recipe.type}
        </Card.Text>
        <Card.Text as="div">
          <Link to={`recipes/${recipe.id}/reviews`}>
            <Rating value={reviewAverage} text={`${reviewCount} reviews`} />
          </Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleRecipe;
