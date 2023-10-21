import { useEffect, useState } from 'react';
import { PersonForm,Persons,Filter } from './Components';
import PersonsService from './services/PersonsService';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(()=>{
    PersonsService.getAll().then(person=>setPersons(person));
  },[])

  const addName = (event) => {
    event.preventDefault();
    if (newName && newNumber) {
      const existingPerson = persons.find((person) => person.name === newName);
      if (existingPerson) {
        const isConfirmed = window.confirm(
          `${newName} is already in the phonebook. Replace the old number with a new one?`
        );
        if (isConfirmed) {
          const updatedPerson = { ...existingPerson, number: newNumber };
          PersonsService.update(existingPerson.id, updatedPerson).then(
            (returnedObject) => {
              setPersons(
                persons.map((person) =>
                  person.id === existingPerson.id ? returnedObject : person
                )
              );
              setNewName('');
              setNewNumber('');
            }
          );
        }
      } else {
        const nameObject = {
          name: newName,
          number: newNumber,
        };
        PersonsService.create(nameObject).then((returnedObject) => {
          setPersons([...persons, returnedObject]);
          setNewName('');
          setNewNumber('');
        });
      }
    }
  };

  const handleDeleteEntry = (id) => {
    setPersons(persons.filter((person) => person.id !== id));
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h3>Add a new contact</h3>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addName={addName}
      />

      <h3>Numbers</h3>
      <Persons persons={filteredPersons} onDelete={handleDeleteEntry} />
    </div>
  );
};







export default App;
