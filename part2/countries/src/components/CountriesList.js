import React from 'react';

const CountriesList = ({ countries, handleClick }) => {
  const listOfCountries = countries.map((country) => {
    return (
      <li key={country.alpha3Code}>
        {country.name} <button onClick={() => handleClick(country.name)}>Show</button>
      </li>
    );
  });

  return <ul>{listOfCountries}</ul>;
};

export default CountriesList;
