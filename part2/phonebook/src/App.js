import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "923-233-2343" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

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
      <ul>
        {persons.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
