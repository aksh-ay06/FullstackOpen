import PersonsService from "../services/PersonsService";

const Persons = ({ persons, onDelete }) => {
  const handleDelete = (id) => {
    PersonsService.deleteperson(id).then((response) => {
      if (response !== null) {
        onDelete(id);
      }
    });
  };

  return (
    <ul>
      {persons.map((person) => (
        <li key={person.id}>
          {person.name} - {person.number}
          <button onClick={() => handleDelete(person.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Persons;
