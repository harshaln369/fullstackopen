import axios from "axios";

// already extracted the code to seperate file
const addNewNote = (newNote) => {
  return axios
    .post("http://localhost:3001/persons", newNote)
    .then((response) => response.data);
};

export { addNewNote };
