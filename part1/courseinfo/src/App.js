const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  console.log(props);
  return (
    <div>
      {props.parts.map((part, index) => (
        <Part key={index} part={part} />
      ))}
    </div>
  );
};

const Part = (props) => {
  console.log(props);
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Total = (props) => {
  const allExercises = props.parts.map((part) => part.exercises);

  const totalExercises = allExercises.reduce((prev, curr) => prev + curr, 0);

  return <p>Number of exercises {totalExercises}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
