import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allRatings, setAllRatings] = useState([]);

  const setGoodFeedback = () => {
    setGood(good + 1);
    setAllRatings(allRatings.concat(1));
  };

  const setNeutralFeedback = () => {
    setNeutral(neutral + 1);
    setAllRatings(allRatings.concat(0));
  };

  const setBadFeedback = () => {
    setBad(bad + 1);
    setAllRatings(allRatings.concat(-1));
  };

  let total = allRatings.length;
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let average = allRatings.reduce(reducer, 0) / total;
  let positivePercentage = (good / total) * 100;

  return (
    <div>
      <h1>Give your feedback</h1>

      <button onClick={() => setGoodFeedback()}>Good</button>
      <button onClick={() => setNeutralFeedback()}>Neutral</button>
      <button onClick={() => setBadFeedback()}>Bad</button>

      <h1>Stats</h1>

      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>

      <p>Total: {total}</p>
      <p>Average: {average}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
