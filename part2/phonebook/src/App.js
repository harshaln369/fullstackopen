import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [filteredPersons, setFilteredPersons] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const filterNamesHandler = (event) => {
    console.log(event.target.value);
    const name = event.target.value;
    setSearchField(event.target.value);
    setFilteredPersons(
      persons.filter((person) => person.name.toLowerCase().includes(name))
    );
  };

  const inputChangeHandler = (event) => {
    if (event.target.name === "name") {
      setNewName(event.target.value);
    } else if (event.target.name === "number") {
      setNewNumber(event.target.value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const nameAlreadyExists = persons.filter(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    if (nameAlreadyExists.length > 0) {
      alert(`${newName} is already added to phonebook.`);
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber }));
    }
    setNewName("");
    setNewNumber("");
  };

  const renderPersons =
    searchField.length > 0
      ? filteredPersons.map((person) => (
          <li key={person.id}>
            {person.name} {person.number}
          </li>
        ))
      : persons.map((person) => (
          <li key={person.id}>
            {person.name} {person.number}
          </li>
        ));

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with: <input onChange={filterNamesHandler} />
      <h2>add a new</h2>
      <form onSubmit={submitHandler}>
        <div>
          name:{" "}
          <input onChange={inputChangeHandler} value={newName} name="name" />
          <br />
          number:{" "}
          <input
            onChange={inputChangeHandler}
            value={newNumber}
            name="number"
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>{renderPersons}</ul>
    </div>
  );
};

export default App;
