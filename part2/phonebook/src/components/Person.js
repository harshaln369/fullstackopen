const Person = ({ name, number, id, onDelete }) => (
  <li>
    {name} {number} <button onClick={() => onDelete(id, name)}>delete</button>
  </li>
);

export default Person;
