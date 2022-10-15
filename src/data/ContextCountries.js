import React, { createContext, useEffect, useState } from 'react';
export const countriesContext = createContext();
const Contextcountries = (props) => {
  const [countries, setcountries] = useState([]);

  const currArrObject =
    countries &&
    countries.map((country) => {
      const code = country.currencies?.map((currency, idx) => {
        return currency.code;
      });
      const symbol = country.currencies?.map((currency, idx) => {
        return currency.symbol;
      });

      return {
        name: country.name,
        flag: country.flag,
        currency: code,
        symbol: symbol,
      };
    });

  console.log(currArrObject);
  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then((response) => response.json())
      .then((counts) => {
        setcountries(counts);
      });
  }, []);
  return (
    <countriesContext.Provider value={currArrObject}>
      {props.children}
    </countriesContext.Provider>
  );
};

export default Contextcountries;
