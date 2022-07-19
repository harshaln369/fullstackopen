import { useState, useEffect } from "react";

import axios from "axios";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => setPersons(response.data));
  }, []);

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

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onFilterNameChange={filterNamesHandler} />
      <h2>add a new</h2>

      <PersonForm
        onSubmit={submitHandler}
        onInputChange={inputChangeHandler}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons
        searchField={searchField}
        filteredPersons={filteredPersons}
        persons={persons}
      />
    </div>
  );
};

export default App;
