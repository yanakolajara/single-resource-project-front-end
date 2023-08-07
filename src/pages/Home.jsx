import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import SingleRecipe from '../components/SingleRecipe';
import RecipeCarousel from '../components/RecipeCarousel';

import { getAllRecipes } from '../Api/Api';

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const res = await getAllRecipes();
      console.log(res);
      setRecipes(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);
  return (
    <>
      <RecipeCarousel />
      <h1>Favorite Recipes</h1>
      <Row>
        {recipes &&
          recipes.map((recipe) => (
            <Col sm={12} md={6} lg={4} xl={3} key={recipe.id}>
              <SingleRecipe recipe={recipe} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default Home;
