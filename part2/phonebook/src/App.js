import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchedName, setSearchedName] = useState('');

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const nameExists = persons.find((person) => person.name.toLowerCase() === newName.toLowerCase());

  const addPerson = (e) => {
    e.preventDefault();

    if (nameExists) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const newPersonToAdd = { name: newName, number: newNumber };
      personService.create(newPersonToAdd).then((addedPerson) => {
        setPersons(persons.concat(addedPerson));
        setNewName('');
        setNewNumber('');
      });
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

  const removePerson = (idToRemove) => {
    let personToRemove = persons.find((person) => person.id === idToRemove);
    if (window.confirm(`Do you really want to delete ${personToRemove.name}?`)) {
      personService.remove(idToRemove).then(() => {
        setPersons(persons.filter((person) => person.id !== idToRemove));
      });
    }
  };

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
      <Persons personsToDisplay={personsToDisplay} handleClick={removePerson} />
    </div>
  );
};

export default App;
