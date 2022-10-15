import React, { useContext, useState } from 'react';
import { countriesContext } from '../data/ContextCountries';
import DownIcon from '../icons/DownIcon';
import RightIcon from '../icons/RightIcon';
import Currencies from './Currencies';
import CurrencyInput from './CurrencyInput';
import SelectCurrency from './SelectCurrency';

const Hero = () => {
  const countries = useContext(countriesContext);
  const [arrow, setArrow] = useState(false);
  const [selected, setSelected] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({});
  const openSelect = () => {
    setArrow(!arrow);
  };
  return (
    <div className='md:w-[50vw] py-5'>
      <div className='container max-w-sm mx-auto flex justify-center items-start '>
        <div className='hero w-full h-[70vh] text-center flex flex-col justify-center gap-10 items-center'>
          {/* currency info  */}
          {selected ? (
            <div
              className='w-full'
              onClick={() => {
                setSelected(!selected);
                setSelectedCountry(null);
                setArrow(!arrow);
              }}>
              <SelectCurrency country={selectedCountry} />
            </div>
          ) : (
            <div className=' relative  button w-full mb-1  flex justify-between items-center gap-1 capitalize py-2 px-4 bg-flavour4 rounded-lg shadow-sm'>
              <div className='typo text-lg'>select currency</div>
              <button
                className='icon cursor-pointer bg-flavour3 rounded-md hover:shadow-xl focus:shadow-none'
                onClick={openSelect}>
                {arrow ? <RightIcon /> : <DownIcon />}
              </button>
              <Currencies
                arrow={arrow}
                setArrow={setArrow}
                selectedCountry={selectedCountry}
                setSelectedCountry={setSelectedCountry}
                selected={selected}
                setSelected={setSelected}
                countries={countries}
              />
            </div>
          )}
          {/* input for amount of mony */}
          <div className='amount w-full'>
            <CurrencyInput symbol={selectedCountry?.symbol} />
          </div>

          <div className='w-full'>
            <span className='block w-full rounded-md shadow-sm'>
              <button
                type='button'
                className='py-2 px-4 bg-flavour1 hover:bg-flavour2 focus:ring-flavour4 text-flavour5 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '>
                Smash Me
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
