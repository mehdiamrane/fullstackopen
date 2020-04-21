import React from 'react';

const CountriesList = ({ countries }) => {
  const listOfCountries = countries.map((country) => {
    return <li key={country.alpha3Code}>{country.name}</li>;
  });

  return <ul>{listOfCountries}</ul>;
};

export default CountriesList;
