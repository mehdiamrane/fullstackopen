import React from 'react';

const Filter = (props) => {
  return (
    <div>
      Find by name: <input value={props.value} onChange={props.handleOnChange} />
    </div>
  );
};

export default Filter;
