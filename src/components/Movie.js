export const Movie = ({ item }) => {
  return (
    <div className='mx-12 my-4 max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-800'>
      <img
        className='w-full h-auto'
        src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
        alt={item.title}
      />
      <div className='px-5 py-4'>
        <div className='text-white font-bold text-xl mb-2'>{item?.title}</div>
        <p className='text-white text-base'>
          Release Date:{' '}
          {new Date(item?.release_date).toLocaleDateString('en-US')}
        </p>
      </div>
      <div className='flex justify-center items-center mb-5'>
        <button className='bg-blue-500 hover:bg-blue-700 hover:scale-110 duration-200 text-white font-bold py-2 px-4 border border-blue-700 rounded-full'>
          View Details
        </button>
      </div>
    </div>
  );
};
