import Requests from '../Requests';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Movie } from './Movie';

export const Gallery = ({ fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchUrl]);

  // Buttons to sort by popular, now playing, top rated, upcoming
  function sortPopular() {
    axios.get(Requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }

  function sortNowPlaying() {
    axios.get(Requests.requestNowPlaying).then((response) => {
      setMovies(response.data.results);
    });
  }

  function sortUpcoming() {
    axios.get(Requests.requestUpcoming).then((response) => {
      setMovies(response.data.results);
    });
  }
  function sortTopRated() {
    axios.get(Requests.requestTopRated).then((response) => {
      setMovies(response.data.results);
    });
  }

  return (
    <>
      <div className='flex justify-evenly'>
        <button
          className='bg-blue-500 hover:bg-blue-700 hover:scale-110 duration-200 text-white font-bold mt-8 py-3 px-5 border border-blue-700 rounded-md'
          onClick={sortPopular}
        >
          Popular
        </button>
        <button
          className='bg-blue-500 hover:bg-blue-700 hover:scale-110 duration-200 text-white font-bold mt-8 py-3 px-5 border border-blue-700 rounded-md'
          onClick={sortNowPlaying}
        >
          Now Playing
        </button>
        <button
          className='bg-blue-500 hover:bg-blue-700 hover:scale-110 duration-200 text-white font-bold mt-8 py-3 px-5 border border-blue-700 rounded-md'
          onClick={sortUpcoming}
        >
          Upcoming
        </button>
        <button
          className='bg-blue-500 hover:bg-blue-700 hover:scale-110 duration-200 text-white font-bold mt-8 py-3 px-5 border border-blue-700 rounded-md'
          onClick={sortTopRated}
        >
          Top Rated
        </button>
      </div>
      <div className='my-6'>
        <div className='flex flex-wrap'>
          {movies.map((item, id) => (
            <Movie
              item={item}
              key={id}
            />
          ))}
        </div>
      </div>
    </>
  );
};
