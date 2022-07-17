import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const inputChangeHandler = (event) => {
    setNewName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const nameAlreadyExists = persons.filter(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    if (nameAlreadyExists.length > 0) {
      alert(`${newName} is already added to phonebook.`);
    } else {
      setPersons(persons.concat({ name: newName }));
    }
    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={submitHandler}>
        <div>
          name: <input onChange={inputChangeHandler} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
