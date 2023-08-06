import React from 'react';

import { Row, Col } from 'react-bootstrap';
import SingleRecipe from '../components/SingleRecipe';
import RecipeCarousel from '../components/RecipeCarousel';
import { recipes } from '../recipe';

const Home = () => {
  return (
    <>
      <RecipeCarousel />
      <h1>Favorite Recipes</h1>
      <Row>
        {recipes.map((recipe) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <SingleRecipe recipe={recipe} key={recipe.id} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
