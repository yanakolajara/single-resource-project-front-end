import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import SingleRecipe from '../components/SingleRecipe';
import RecipeCarousel from '../components/RecipeCarousel';
import Loading from '../components/Loading';

import { getAllRecipes } from '../Api/Api';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRecipes = async () => {
    try {
      const res = await getAllRecipes();
      // console.log(res);
      setRecipes(res.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

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
