import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '06-01-02-03-04' }]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

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

  const listOfPersons = persons.map((person) => {
    return (
      <li key={person.name}>
        {person.name} ({person.number})
      </li>
    );
  });

  return (
    <div>
      <h2>Phonebook</h2>
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
