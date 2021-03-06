import { useState, useEffect } from "react";

const Votes = ({ points, setPoints, selected }) => {
  const incrementVote = () => {
    setPoints((prev) => {
      let copyPrev = [...prev];
      copyPrev[selected] += 1;
      return copyPrev;
    });
  };
  return (
    <>
      <p>has {points[selected]} votes.</p>
      <button onClick={incrementVote}>vote</button>
    </>
  );
};

const MostVotes = ({ points, anecdotes }) => {
  const [maxVotesIndex, setMaxVotesIndex] = useState(null);

  useEffect(() => {
    setMaxVotesIndex(points.indexOf(Math.max(...points)));
  }, [points, maxVotesIndex]);

  return (
    <>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[maxVotesIndex]}</p>
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);

  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

  const getRandomSelection = () => {
    const randomSelection = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomSelection);
  };

  return (
    <>
      <div>{anecdotes[selected]}</div>

      <Votes points={points} selected={selected} setPoints={setPoints} />
      <button onClick={getRandomSelection}>next anecdote</button>
      <MostVotes points={points} anecdotes={anecdotes} />
    </>
  );
};

export default App;
