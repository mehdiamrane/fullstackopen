import React from 'react';

const Persons = ({ personsToDisplay, handleClick }) => {
  const listOfPersons = personsToDisplay.map((person) => {
    return (
      <li key={person.name}>
        {person.name} ({person.number}){' '}
        <button onClick={() => handleClick(person.id)}>delete</button>
      </li>
    );
  });

  return <ul>{listOfPersons}</ul>;
};

export default Persons;
