import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/persons';
import Alert from './components/Alert';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchedName, setSearchedName] = useState('');
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const nameExists = persons.find((person) => person.name.toLowerCase() === newName.toLowerCase());

  const addPerson = (e) => {
    e.preventDefault();

    if (nameExists) {
      if (
        window.confirm(`${newName} is already added to phonebook, replace old number with new one?`)
      ) {
        const personToUpdate = persons.find(
          (person) => person.name.toLowerCase() === newName.toLowerCase()
        );
        const changedPerson = { ...personToUpdate, number: newNumber };

        personService.update(personToUpdate.id, changedPerson).then((updatedPerson) => {
          setPersons(
            persons.map((person) => (person.id !== personToUpdate.id ? person : updatedPerson))
          );
          setNewName('');
          setNewNumber('');
          setAlertType('success');
          setAlertMessage(`${updatedPerson.name}'s number was updated`);
          setTimeout(() => {
            setAlertMessage(null);
          }, 5000);
        });
      }
    } else {
      const newPersonToAdd = { name: newName, number: newNumber };
      personService.create(newPersonToAdd).then((addedPerson) => {
        setPersons(persons.concat(addedPerson));
        setNewName('');
        setNewNumber('');
        setAlertType('success');
        setAlertMessage(`${addedPerson.name} was added to the phonebook`);
        setTimeout(() => {
          setAlertMessage(null);
        }, 5000);
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
        setAlertType('success');
        setAlertMessage(`${personToRemove.name} was deleted from phonebook`);
        setTimeout(() => {
          setAlertMessage(null);
        }, 5000);
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Alert message={alertMessage} type={alertType} />
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
