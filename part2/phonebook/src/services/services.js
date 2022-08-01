import axios from "axios";
const BASE_URL = "/api";

const getPersons = () => {
  return axios.get(`${BASE_URL}/persons`).then((response) => response.data);
};

// already extracted the code to seperate file
const addNewNote = (newNote) => {
  console.log("new note===>", newNote);
  return axios
    .post(`${BASE_URL}/persons`, newNote)
    .then((response) => {
      console.log("add new note console===>", response.data);
      return response.data;
    })
    .catch((error) => {
      return error.response.data.error;
    });
};

const deletePerson = (id) => {
  return axios.delete(`${BASE_URL}/persons/${id}`);
};

const updatePerson = (id, updatedData) => {
  return axios
    .put(`${BASE_URL}/persons/${id}`, updatedData)
    .then((response) => response.data)
    .catch((error) => {
      return error.response.data.error;
    });
};

export { addNewNote, getPersons, deletePerson, updatePerson };
