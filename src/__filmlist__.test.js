import React from 'react';
import { render } from '@testing-library/react';
import FilmList from './components/FilmList';

describe('FilmList Component', () => {
  it('should render a list of movie posters', () => {
    const movies = [
      { Poster: 'url1', imdbID: '1' },
      { Poster: 'url2', imdbID: '2' },
      { Poster: 'url3', imdbID: '3' },
    ];

    const { getAllByAltText } = render(<FilmList movies={movies} />);

    const moviePosters = getAllByAltText('film');
    expect(moviePosters).toHaveLength(movies.length);

    // You can further test properties of individual elements if needed.
    // For example, to test the `src` attribute of the first image:
    expect(moviePosters[0]).toHaveAttribute('src', 'url1');
  });

  it('should render no movie posters when the movies array is empty', () => {
    const movies = [];

    const { queryByAltText } = render(<FilmList movies={movies} />);

    const moviePoster = queryByAltText('film');
    expect(moviePoster).toBeNull();
  });
});
