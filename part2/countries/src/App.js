import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import Info from './components/Info';
import Country from './components/Country';
import CountriesList from './components/CountriesList';
import axios from 'axios';

const App = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      setCountriesData(response.data);
    });
  }, []);

  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  const showCountryOnClick = (countryName) => {
    setSearchValue(countryName);
  };

  const matchingCountries = countriesData.filter((country) => {
    return country.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  const matchesCount = matchingCountries.length;

  let searchOutcome;

  if (searchValue.length > 0 && matchesCount === 1) {
    searchOutcome = 'oneMatch';
  } else if (searchValue.length > 0 && matchesCount === 0) {
    searchOutcome = 'noMatch';
  } else if (searchValue.length > 0 && matchesCount > 1 && matchesCount < 10) {
    searchOutcome = 'manyMatches';
  } else if (searchValue.length > 0 && matchesCount !== 1 && matchesCount > 10) {
    searchOutcome = 'tooMany';
  } else {
    searchOutcome = 'empty';
  }

  return (
    <div>
      <h1>Country Wiki</h1>
      <Search value={searchValue} onChange={onSearchValueChange} />

      {(searchOutcome === 'oneMatch' && <Country country={matchingCountries[0]} />) ||
        (searchOutcome === 'noMatch' && <Info case={searchOutcome} />) ||
        (searchOutcome === 'manyMatches' && (
          <CountriesList countries={matchingCountries} handleClick={showCountryOnClick} />
        )) ||
        (searchOutcome === 'tooMany' && <Info case={searchOutcome} />) ||
        (searchOutcome === 'empty' && <Info case={searchOutcome} />)}
    </div>
  );
};

export default App;
