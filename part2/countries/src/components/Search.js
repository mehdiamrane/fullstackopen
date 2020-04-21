import React from 'react';

const Search = (props) => {
  return (
    <>
      <h3>Search for a country</h3>
      <input value={props.value} onChange={props.onChange} placeholder='Type a country name' />
    </>
  );
};

export default Search;
