import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import { recipes } from '../recipe';

const RecipeCarousel = () => {
  return (
    <Carousel pause="hover" className="bg-warning mb-4">
      {recipes.map((recipe) => (
        <Carousel.Item key={recipe.id}>
          <Image src={recipe.photo} alt={recipe.name} fluid />
          <Carousel.Caption className="carousel-caption">
            <h2>{recipe.name}</h2>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default RecipeCarousel;
