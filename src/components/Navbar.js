import React, { useState } from 'react';
export const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <img
        className='cursor-pointer w-[450px] h-[110px]'
        src='https://media-private.canva.com/ADwn8/MAFghEADwn8/1/s.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230421%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230421T002509Z&X-Amz-Expires=19894&X-Amz-Signature=0adc59afcf6a893d961af662ee59a6c76bdf645ab228b2e553dc019090ec2b75&X-Amz-SignedHeaders=host&response-expires=Fri%2C%2021%20Apr%202023%2005%3A56%3A43%20GMT'
        alt='logo'
        onClick={() => {
          window.location.href = '/';
        }}
      />
      {/* Searchbar */}
      <span className=''>
        <input
          type='text'
          placeholder='Search...'
          className='w-[200px] h-[50px] rounded-full mr-5 p-4 bg-transparent outline-none transition ease-in-out delay-250 hover:-translate-y-1 hover:scale-110 hover:border-blue-500 hover:border-2 focus:text-gray-300 duration-200'
        />
      </span>
    </div>
  );
};
