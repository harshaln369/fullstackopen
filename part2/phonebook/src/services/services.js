import axios from "axios";
const BASE_URL = "http://localhost:3001/api";

const getPersons = () => {
  return axios.get(`${BASE_URL}/persons`).then((response) => response.data);
};

// already extracted the code to seperate file
const addNewNote = (newNote) => {
  return axios
    .post(`${BASE_URL}/persons`, newNote)
    .then((response) => response.data);
};

const deletePerson = (id) => {
  return axios.delete(`${BASE_URL}/persons/${id}`);
};

const updatePerson = (id, updatedData) => {
  return axios
    .put(`${BASE_URL}/persons/${id}`, updatedData)
    .then((response) => response.data);
};

export { addNewNote, getPersons, deletePerson, updatePerson };
