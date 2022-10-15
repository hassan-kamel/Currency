import React from 'react';

const CurrencyInput = ({ symbol }) => {
  //   console.log('symbol: ', symbol);
  return (
    <div className='flex relative  '>
      <span className='rounded-l-md inline-flex  items-center  border-t bg-transparent border-l border-b  border-flavour5 text-flavour5 shadow-sm text-2xl py-2 px-4'>
        {symbol && symbol[0]}
      </span>
      <input
        type='number'
        className=' rounded-r-lg flex-1 appearance-none border  w-full py-2 px-4 bg-transparent border-flavour5 text-flavour5 placeholder-flavour5 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-flavour4 focus:border-transparent'
        placeholder='Amount'
      />
    </div>
  );
};

export default CurrencyInput;
