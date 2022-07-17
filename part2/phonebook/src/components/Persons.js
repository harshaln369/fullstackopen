import Person from "./Person";

const Persons = ({ searchField, filteredPersons, persons }) => {
  const renderPersons =
    searchField.length > 0
      ? filteredPersons.map((person) => (
          <Person key={person.id} name={person.name} number={person.number} />
        ))
      : persons.map((person) => (
          <Person key={person.id} name={person.name} number={person.number} />
        ));
  return <ul>{renderPersons}</ul>;
};

export default Persons;
