import React from 'react';

const Persons = ({ personsToDisplay }) => {
  const listOfPersons = personsToDisplay.map((person) => {
    return (
      <li key={person.name}>
        {person.name} ({person.number})
      </li>
    );
  });

  return <ul>{listOfPersons}</ul>;
};

export default Persons;
