import React, { useEffect, useCallback } from 'react';
import { Row, Col } from 'react-bootstrap';

import { SingleRecipe, RecipeCarousel, Loading } from '../components';

import { useAppContext } from '../context/AppContext';
import { getAllRecipes } from '../Api/Api';

const Home = () => {
  const { recipes, setRecipes, isLoading, setIsLoading } = useAppContext();

  const fetchRecipes = useCallback(async () => {
    try {
      const res = await getAllRecipes();
      setRecipes(res.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  }, [setRecipes, setIsLoading]);

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <>
      <div id='carouselDiv'>
        <RecipeCarousel recipes={recipes} id="carouselHomeElement"/>
      </div>
      <h1>Favorite Recipes</h1>
      <Row className="d-flex align-items-center justify-content-center mb-5">
        {recipes.map((recipe) => (
          <Col sm={12} md={6} lg={4} xl={3} key={recipe.id}>
            <SingleRecipe recipe={recipe} />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default Home;
