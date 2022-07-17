const PersonForm = ({ onSubmit, onInputChange, newName, newNumber }) => (
  <form onSubmit={onSubmit}>
    <div>
      name: <input onChange={onInputChange} value={newName} name="name" />
      <br />
      number: <input onChange={onInputChange} value={newNumber} name="number" />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
);

export default PersonForm;
