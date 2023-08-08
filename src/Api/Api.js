import Axios from './axios';

async function getAllRecipes() {
  try {
    const result = await Axios.get('/recipes');
    return result;
  } catch (err) {
    return err;
  }
}

async function getRecipeById(id) {
  try {
    let result = await Axios.get(`/recipes/${id}`);

    return result;
  } catch (e) {
    return e;
  }
}

async function getRecipeReviews(id) {
  try {
    let result = await Axios.get(`/recipes/${id}/reviews/get-reviews`);

    return result;
  } catch (e) {
    return e;
  }
}

export { getAllRecipes, getRecipeById, getRecipeReviews };
