import React from 'react';

const SelectCurrency = ({ country }) => {
  return (
    <div className='flex w-full items-center justify-between gap-4 bg-flavour5 text-flavour3 py-3 px-4 hover:scale-105 transition-all cursor-pointer rounded-md'>
      <div className='flag'>
        <img
          className='w-full h-5 object-contain '
          src={country.flag}
          alt={country.name}
        />
      </div>
      <div className='country-name'>{country.name}</div>
      <div className='currency-code'>
        {country.currency && country.currency}
      </div>
    </div>
  );
};

export default SelectCurrency;
