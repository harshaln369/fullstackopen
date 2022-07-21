import Person from "./Person";

const Persons = ({ searchField, filteredPersons, persons, onDelete }) => {
  const renderPersons =
    searchField.length > 0
      ? filteredPersons.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            number={person.number}
            id={person.id}
            onDelete={onDelete}
          />
        ))
      : persons.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            number={person.number}
            id={person.id}
            onDelete={onDelete}
          />
        ));
  return <ul>{renderPersons}</ul>;
};

export default Persons;
