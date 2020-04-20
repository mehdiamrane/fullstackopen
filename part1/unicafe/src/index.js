import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistics = (props) => {
  if (!props.total) {
    return <p>No feedback given...</p>;
  } else {
    return (
      <>
        <h1>Stats</h1>

        <p>Good: {props.good}</p>
        <p>Neutral: {props.neutral}</p>
        <p>Bad: {props.bad}</p>

        <p>Total: {props.total}</p>
        <p>Average: {props.average}</p>
        <p>Positive: {props.positivePercentage}%</p>
      </>
    );
  }
};

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

  const statisticsProps = {
    good: good,
    neutral: neutral,
    bad: bad,
    total: total,
    average: average,
    positivePercentage: positivePercentage,
  };

  return (
    <div>
      <h1>Give your feedback</h1>

      <button onClick={() => setGoodFeedback()}>Good</button>
      <button onClick={() => setNeutralFeedback()}>Neutral</button>
      <button onClick={() => setBadFeedback()}>Bad</button>

      <Statistics {...statisticsProps} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
