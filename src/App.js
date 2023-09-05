import './App.css';
import { useState, useEffect } from 'react';
import MoviesList from './components/FilmList';
import SearchField from './components/SearchField';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  // Request
  const getFilmsRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_API_KEY}`;
    console.log(url)

    const response = await fetch(url);
    const responseJson = await response.json();

    if (response.status === 200 && responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => { getFilmsRequest(searchValue); }, [searchValue]);

  return (
    <div className='container-fluid film-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <SearchField searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className='row'>
        <MoviesList movies={movies} />
      </div>
    </div>
  );
}

export default App;
