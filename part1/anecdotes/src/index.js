import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const AnecdoteBlock = ({ children, ...props }) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.anecdoteToDisplay}</p>
      <p>- This quote has {props.anecdoteVotes} votes -</p>
      {children}
    </div>
  );
};

const App = (props) => {
  let startVotes = Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf, 0);

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(startVotes);

  const setNewAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const voteForAnecdote = () => {
    let votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVotes(votesCopy);
  };

  let mostVoted = votes.indexOf(Math.max(...votes));

  return (
    <>
      <AnecdoteBlock
        title='Anecdote of the day'
        anecdoteToDisplay={props.anecdotes[selected]}
        anecdoteVotes={votes[selected]}
      >
        <Button onClick={() => setNewAnecdote()} text='Next anecdote' />
        <Button onClick={() => voteForAnecdote()} text='Vote for anecdote' />
      </AnecdoteBlock>
      <AnecdoteBlock
        title='Anecdote with most votes'
        anecdoteToDisplay={props.anecdotes[mostVoted]}
        anecdoteVotes={votes[mostVoted]}
      />
    </>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
