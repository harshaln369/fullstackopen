import axios from "axios";

const addNewNote = (newNote) => {
  return axios
    .post("http://localhost:3001/persons", newNote)
    .then((response) => response.data);
};

export { addNewNote };
