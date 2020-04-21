import React from 'react';

const Info = (props) => {
  return (
    <>
      <h3>Search for a country</h3>
      {props.case === 'empty' && <p>Type a country name to get data</p>}
      {props.case === 'tooMany' && <p>Too many matches, specify your search</p>}
      {props.case === 'noMatch' && <p>No countries found, please try again</p>}
    </>
  );
};

export default Info;
