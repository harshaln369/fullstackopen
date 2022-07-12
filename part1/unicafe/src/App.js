import { useState } from "react";

const Header = ({ title }) => <h1>{title}</h1>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Feedback = ({ buttons, onChangeRating }) => {
  return (
    <>
      <Header title="give feedback" />
      {buttons.map((buttonText) => (
        <Button onClick={() => onChangeRating(buttonText)} text={buttonText} />
      ))}
    </>
  );
};

const Statistics = ({ buttons, ratings }) => (
  <>
    <Header title="statistics" />
    {buttons.map((button) => (
      <p>
        {button} {ratings[button]}
      </p>
    ))}
  </>
);

const App = () => {
  const buttons = ["good", "neutral", "bad"];
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleRating = (buttonValue) => {
    if (buttonValue === "good") {
      setGood(good + 1);
    } else if (buttonValue === "neutral") {
      setNeutral(neutral + 1);
    } else {
      setBad(bad + 1);
    }
  };

  return (
    <div>
      <Feedback buttons={buttons} onChangeRating={handleRating} />
      <Statistics buttons={buttons} ratings={{ good, neutral, bad }} />
    </div>
  );
};

export default App;
