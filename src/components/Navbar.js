import React from 'react';
import logo from '../images/world.png';
const Navbar = () => {
  return (
    <nav className='h-[10vh] shadow-md bg-flavour1'>
      <div className='container max-w-3xl mx-auto py-5'>
        <div className='navbar flex gap-[50%] items-center'>
          <div className='logo'>
            <img
              className='w-full h-[5vh] object-contain'
              src={logo}
              alt='World'
            />
          </div>
          <div className='heading -translate-x-[100%]'>
            <h1 className='text-xl uppercase font-bold'>currency</h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
