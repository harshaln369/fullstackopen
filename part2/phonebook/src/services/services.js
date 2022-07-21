import axios from "axios";
const getPersons = () => {
  return axios
    .get("http://localhost:3001/persons")
    .then((response) => response.data);
};

// already extracted the code to seperate file
const addNewNote = (newNote) => {
  return axios
    .post("http://localhost:3001/persons", newNote)
    .then((response) => response.data);
};

const deletePerson = (id) => {
  return axios.delete(`http://localhost:3001/persons/${id}`);
};

const updatePerson = (id, updatedData) => {
  return axios
    .put(`http://localhost:3001/persons/${id}`, updatedData)
    .then((response) => response.data);
};

export { addNewNote, getPersons, deletePerson, updatePerson };
