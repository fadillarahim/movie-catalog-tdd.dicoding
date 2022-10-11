/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteMovieIdb from '../../src/scripts/data/favorite-movie-idb';

const createLikeButtonPresenterWithMovie = async (movie) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteMovies: FavoriteMovieIdb,
    movie,
  });
};

export { createLikeButtonPresenterWithMovie };