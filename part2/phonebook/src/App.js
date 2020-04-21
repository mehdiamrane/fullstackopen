import React, { useState } from 'react';

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

  const listOfPersons = personsToDisplay.map((person) => {
    return (
      <li key={person.name}>
        {person.name} ({person.number})
      </li>
    );
  });

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Find by name: <input value={searchedName} onChange={handleSearchedNameChange} />
      </div>
      <h2>Add to phone book</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameInputChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberInputChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>{listOfPersons}</ul>
    </div>
  );
};

export default App;
