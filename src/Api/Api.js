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

async function createRecipeReview(id, newReview) {
  try {
    let result = await Axios.post(`/recipes/${id}/reviews`, newReview);

    return result;
  } catch (e) {
    return e;
  }
}

async function updateRecipeReview(id, updatedReviewId, updatedReview) {
  try {
    let result = await Axios.put(
      `/recipes/${id}/reviews/${updatedReviewId}`,
      updatedReview
    );

    return result;
  } catch (e) {
    return e;
  }
}

async function deleteRecipeReview(id) {
  try {
    let result = await Axios.delete(`/recipes/${id}/reviews/${id}`);

    return result;
  } catch (e) {
    return e;
  }
}

export {
  getAllRecipes,
  getRecipeById,
  getRecipeReviews,
  createRecipeReview,
  updateRecipeReview,
  deleteRecipeReview,
};
