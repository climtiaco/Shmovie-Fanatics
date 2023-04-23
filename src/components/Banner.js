import { useEffect, useState } from 'react';
import Requests from '../Requests';
import axios from 'axios';

export const Banner = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(Requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const smallerOverview = (str, n) => {
    if (str?.length > n) {
      return str.slice(0, n) + '...';
    } else {
      return str;
    }
  };

  return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-full'>
        {/* DIV BELOW IS IMAGE OVERLAY TINT */}
        <div className='absolute w-full h-[550px]  bg-gradient-to-b from-gray-900'></div>
        <img
          className='w-full h-full object-cover'
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className='absolute w-full top-[18%] p-4 md:p-8'>
          <h1
            className='text-3xl md:text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent 
            from-teal-300 to-white'
          >
            {movie?.title}
          </h1>
          <p className='text-gray-300 text-lg my-2'>
            Released:{' '}
            {new Date(movie?.release_date).toLocaleDateString('en-US')}
          </p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 text-lg '>
            {smallerOverview(movie?.overview, 175)}
          </p>
          <div className='my-4'>
            <button className='hover:scale-110 duration-200 border text-white border-blue-500 py-3 px-5 rounded-md'>
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
