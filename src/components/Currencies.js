import React, { useState } from 'react';
import SearchIcon from '../icons/SearchIcon';
import SelectCurrency from './SelectCurrency';

const Currencies = ({
  arrow,
  setArrow,
  selected,
  setSelected,
  setSelectedCountry,
  countries,
}) => {
  const [countrySearched, setcountrySearched] = useState('');
  const searchForCountry = (value) => {
    setcountrySearched(value);
  };
  return (
    <div
      className={`${
        arrow ? 'translate-y-0' : 'translate-y-full opacity-0 '
      }  origin-top transition-all duration-700 h-[70vh] overflow-y-scroll scroll-smooth py-2 px-4 w-full mx-auto shadow-xl rounded-md bg-flavour2 absolute z-10 top-[110%] left-0
      `}>
      <div className='searchBox flex justify-start items-center px-2 py-4 '>
        <SearchIcon />
        <input
          className='bg-transparent ml-5 outline-none text-flavour5 placeholder:text-flavour5'
          type='text'
          name='search'
          id='curr-search'
          placeholder='search for country'
          onChange={(e) => {
            searchForCountry(e.target.value);
          }}
        />
      </div>
      {countrySearched
        ? countries.map((country, idx) => {
            return country.name
              .toLowerCase()
              .includes(countrySearched.toLowerCase()) ||
              country.currency?.includes(countrySearched.toUpperCase()) ? (
              <div
                key={idx}
                onClick={() => {
                  setSelected(!selected);
                  setSelectedCountry(country);
                  setArrow(!arrow);
                }}>
                <SelectCurrency country={country} />;
              </div>
            ) : (
              ''
            );
          })
        : countries.map((country, idx) => {
            return (
              <div
                key={idx}
                onClick={() => {
                  setSelected(!selected);
                  setSelectedCountry(country);
                  setArrow(!arrow);
                }}>
                <SelectCurrency country={country} />;
              </div>
            );
          })}
    </div>
  );
};

export default Currencies;
