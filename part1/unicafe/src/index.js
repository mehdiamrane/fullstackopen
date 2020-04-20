import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  if (!props.total) {
    return <p>No feedback given...</p>;
  } else {
    return (
      <>
        <h1>Stats</h1>
        <table>
          <tbody>
            <Statistic text='Good' value={props.good} />
            <Statistic text='Neutral' value={props.neutral} />
            <Statistic text='Bad' value={props.bad} />

            <Statistic text='Total' value={props.good} />
            <Statistic text='Average' value={props.average} />
            <Statistic text='Positive' value={props.positivePercentage} />
          </tbody>
        </table>
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
    average: Math.round(average * 100) / 100,
    positivePercentage: Math.round(positivePercentage * 100) / 100 + ' %',
  };

  return (
    <div>
      <h1>Give your feedback</h1>

      <Button onClick={() => setGoodFeedback()} text='Good' />
      <Button onClick={() => setNeutralFeedback()} text='Neutral' />
      <Button onClick={() => setBadFeedback()} text='Bad' />

      <Statistics {...statisticsProps} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
