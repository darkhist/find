import React from 'react';
import styled from 'styled-components';

const Subtitle = styled.h3`
  text-align: center;
`;

const Results = ({ results }) => {
  if (results === undefined) {
    return (
      <div />
    );
  }

  if (results.length === 0) {
    return (
      <div>
        <Subtitle>
          No Results
          <span role="img" aria-label="sadface"> 😢 </span>
        </Subtitle>
      </div>
    );
  }

  const jobs = results.map(result => (
    <li key={result.id}>
      {result.company}
      <br />
      {result.title}
      <br />
      Apply Here:
      {result.how_to_apply}
      <br />
      {result.company_url}
    </li>
  ));

  return (
    <div>
      <Subtitle> Results </Subtitle>
      <ul>
        {jobs}
      </ul>
    </div>
  );
};

export default Results;
