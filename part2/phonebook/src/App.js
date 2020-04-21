import React, { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchedName, setSearchedName] = useState('');

  const nameExists = persons.find((person) => person.name.toLowerCase() === newName.toLowerCase());

  const addPerson = (e) => {
    e.preventDefault();

    if (nameExists) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const newPersonToAdd = { name: newName, number: newNumber };
      setPersons(persons.concat(newPersonToAdd));
      setNewName('');
      setNewNumber('');
    }
  };

  const handleNameInputChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberInputChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSearchedNameChange = (e) => {
    setSearchedName(e.target.value);
  };

  const personsToDisplay =
    searchedName.length === 0
      ? persons
      : persons.filter((person) => person.name.toLowerCase().includes(searchedName.toLowerCase()));

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={searchedName} handleOnChange={handleSearchedNameChange} />

      <h2>Add to phone book</h2>
      <PersonForm
        handleOnSubmit={addPerson}
        values={[newName, newNumber]}
        handleOnChange={[handleNameInputChange, handleNumberInputChange]}
      />

      <h2>Numbers</h2>
      <Persons personsToDisplay={personsToDisplay} />
    </div>
  );
};

export default App;
