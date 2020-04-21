import React from 'react';

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

export default Course;
