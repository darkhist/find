import React from 'react';
import styled from 'styled-components';

const Subtitle = styled.h3`
  text-align: center;
`;

const Results = ({ results }) => {
  console.log(results);

  const jobs = results.map(result => (
    <li key={result.id}>
      {result.company}
      <br />
      {result.title}
      <br />
      {result.how_to_apply}
      <br />
      {result.location}
    </li>));

  return (
    <div className="results">
      <Subtitle> Results </Subtitle>
      <ul>
        {jobs}
      </ul>
    </div>
  );
};


export default Results;
