import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RecipeCarousel = ({ recipes }) => {
  return (
    <Carousel pause="hover" className="bg-warning my-5">
      {recipes.map((recipe) => (
        <Carousel.Item key={recipe.id}>
          <Link to={`recipes/${recipe.id}`}>
            <Image
              src={recipe.photo}
              alt={recipe.name}
              fluid
              style={{ width: '600px', height: '400px', objectFit: 'cover' }}
            />
          </Link>
          <Carousel.Caption className="carousel-caption">
            <h2>{recipe.name}</h2>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default RecipeCarousel;
