import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ name }) => {
  return <h2>{name}</h2>;
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  const listOfParts = parts.map((part) => {
    return <Part key={part.id} name={part.name} exercises={part.exercises} />;
  });
  return <>{listOfParts}</>;
};

const Total = ({ parts }) => {
  const totalAmount = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <p style={{ fontWeight: 700 }}>Total of {totalAmount} exercises in this course.</p>;
};

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  const listOfCourses = courses.map((course) => {
    return <Course key={course.id} course={course} />;
  });

  return (
    <div>
      <h1>Web dev curriculum</h1>
      {listOfCourses}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
