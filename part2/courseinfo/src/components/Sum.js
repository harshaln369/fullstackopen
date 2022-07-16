const Sum = ({ parts }) => {
  // already used reduce
  const total = parts.reduce((prevValue, currentValue) => {
    return prevValue + currentValue.exercises;
  }, 0);
  return <p>total of {total} exercises</p>;
};

export default Sum;
