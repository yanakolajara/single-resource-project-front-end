import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

const RecipeCarousel = ({ recipes }) => {
  return (
    <Carousel pause="hover" className="bg-warning mb-4">
      {recipes.map((recipe) => (
        <Carousel.Item key={recipe.id}>
          <Image
            src={recipe.photo}
            alt={recipe.name}
            fluid
            style={{ width: '600px', height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption className="carousel-caption">
            <h2>{recipe.name}</h2>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default RecipeCarousel;
