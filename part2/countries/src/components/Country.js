import React from 'react';

const Country = ({ country }) => {
  const languagesList = country.languages.map((lang) => {
    return <li key={lang.iso639_1}>{lang.name}</li>;
  });
  return (
    <>
      <h3>{country.name}</h3>
      <p>Its capital is {country.capital}</p>
      <p>It has {country.population} inhabitants</p>
      <h4>Languages</h4>
      <ul>{languagesList}</ul>
      <img src={country.flag} height='50px' alt={`${country.name} flag`} />
    </>
  );
};

export default Country;
