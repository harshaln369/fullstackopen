import Part from "./Part";
import Sum from "./Sum";

const Content = ({ parts }) => (
  <>
    {parts.map((part) => (
      <Part key={part.id} name={part.name} exercises={part.exercises} />
    ))}

    <Sum parts={parts} />
  </>
);

export default Content;
