import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const addPerson = (e) => {
    e.preventDefault();
    const newPersonToAdd = { name: newName };
    setPersons(persons.concat(newPersonToAdd));
    setNewName('');
  };

  const handleNameInputChange = (e) => {
    setNewName(e.target.value);
  };

  const listOfPersons = persons.map((person) => {
    return <li key={person.name}>{person.name}</li>;
  });

  return (
    <div>
      <h2>Phonebook</h2>
      <div>debug: {newName}</div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameInputChange} />
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
