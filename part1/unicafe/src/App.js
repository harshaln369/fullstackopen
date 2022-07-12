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
  return (
    <tr>
      <td>all</td>
      <td>{getTotalFromObject(ratings)}</td>
    </tr>
  );
};

const Average = ({ ratings }) => {
  return (
    <tr>
      <td>average</td>
      <td>{getAverageFromObject(ratings)}</td>
    </tr>
  );
};

const Positive = ({ ratings }) => {
  return (
    <tr>
      <td>positive</td>
      <td>{getPositiveFromObject(ratings)} %</td>
    </tr>
  );
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
    <table>
      <tbody>
        {buttons.map((button, idx) => (
          <tr key={idx}>
            <td>{button}</td>
            <td>{ratings[button]}</td>
          </tr>
        ))}

        {/* Defined three different components already */}
        <Total ratings={ratings} />
        <Average ratings={ratings} />
        <Positive ratings={ratings} />
      </tbody>
    </table>
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

      {/* stats is already a different component */}
      {good || bad || neutral ? (
        <Statistics buttons={buttons} ratings={{ good, neutral, bad }} />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;
