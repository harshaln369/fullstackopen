import { useState, useEffect } from "react";

import {
  getPersons,
  addNewNote,
  deletePerson,
  updatePerson,
} from "./services/services";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

import "./index.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    getPersons().then((response) => setPersons(response));
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

  const deleteHandler = (id, name) => {
    if (window.confirm(`Delete ${name} ?`)) {
      setPersons((person) => persons.filter((person) => person.id !== id));
      deletePerson(id).catch((err) => {
        setErrorMessage(
          `Information of ${name} has already been removed from server `
        );
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const nameAlreadyExists = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    if (nameAlreadyExists) {
      if (
        window.confirm(
          `${nameAlreadyExists.name} is already added to phonebook, replace the older number with new one`
        )
      ) {
        updatePerson(nameAlreadyExists.id, {
          name: nameAlreadyExists.name,
          number: newNumber,
          id: nameAlreadyExists.id,
        }).then((response) => {
          setPersons((persons) =>
            persons.map((person) =>
              person.id !== nameAlreadyExists.id ? person : response
            )
          );
        });
      }
    } else {
      setPersons(
        persons.concat({
          name: newName,
          number: newNumber,
          id: persons.length + 1,
        })
      );
      addNewNote({ name: newName, number: newNumber });
      setErrorMessage(`Added ${newName}`);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      {errorMessage && <div className="error">{errorMessage}</div>}
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
        onDelete={deleteHandler}
      />
    </div>
  );
};

export default App;
