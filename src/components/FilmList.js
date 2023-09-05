import React from 'react';

const FilmList = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
				<img src={movie.Poster} alt='film'></img>
			))}
		</>
	);
};

export default FilmList;