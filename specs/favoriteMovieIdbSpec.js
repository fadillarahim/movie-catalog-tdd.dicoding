/* eslint-disable no-unused-vars */
import { async } from 'regenerator-runtime';
import { itActsAsFavoriteMovieModel } from './contracs/favoriteMovieContract';
import FavoriteMovieIdb from '../src/scripts/data/favorite-movie-idb';

describe('Favorite Movie Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteMovieIdb.getAllMovies()).forEach(async (movie) => {
      await FavoriteMovieIdb.deleteMovie(movie.id);
    });
  });

  itActsAsFavoriteMovieModel(FavoriteMovieIdb);
});
