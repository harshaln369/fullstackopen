import { useState } from "react";

const getTotalFromObject = (obj) => {
  let total = 0;
  for (const key in obj) {
    total += obj[key];
  }
  return total;
};

const getAverageFromObject = (obj) => {
  let numerator = 0;
  const total = getTotalFromObject(obj);
  for (const key in obj) {
    if (key === "good") {
      numerator += obj[key];
    } else if (key === "bad") {
      numerator -= obj[key];
    }
  }
  return numerator / total || 0;
};

const getPositiveFromObject = (obj) => {
  let numerator = obj["good"];
  const total = getTotalFromObject(obj);
  return (numerator / total) * 100 || 0;
};

const Header = ({ title }) => <h1>{title}</h1>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Total = ({ ratings }) => {
  return <p>all {getTotalFromObject(ratings)}</p>;
};

const Average = ({ ratings }) => {
  return <p>average {getAverageFromObject(ratings)}</p>;
};

const Positive = ({ ratings }) => {
  return <p>positive {getPositiveFromObject(ratings)} %</p>;
};

const Feedback = ({ buttons, onChangeRating }) => {
  return (
    <>
      <Header title="give feedback" />
      {buttons.map((buttonText, idx) => (
        <Button
          key={idx}
          onClick={() => onChangeRating(buttonText)}
          text={buttonText}
        />
      ))}
    </>
  );
};

const Statistics = ({ buttons, ratings }) => (
  <>
    <Header title="statistics" />
    {buttons.map((button, idx) => (
      <p key={idx}>
        {button} {ratings[button]}
      </p>
    ))}
    <Total ratings={ratings} />
    <Average ratings={ratings} />
    <Positive ratings={ratings} />
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
