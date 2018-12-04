import React from 'react';
import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid black;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 
  0 3px 6px rgba(0,0,0,0.23);
  text-align: left;
  margin: 2em 0;

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
    0 10px 10px rgba(0,0,0,0.22);
  }
`;

export const Job = styled.li`
  padding: .5em;
`;

export const JobTitle = styled.h5`
  font-size: 1.15em;
`;

export const Subtitle = styled.h3`
  font-size: 1.5em;
  text-align: center;
`;

export const Link = styled.a`
  color: ${props => props.company ? '#D77A61' : 'black'};
  font-size: ${props => props.company ? '1.25em' : '1.15em'};
  font-weight: ${props => props.company ? 'bold' : '200'};
  text-decoration-line: none;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
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
    <Card key={result.id}>
      <Job>
        <Link company href={result.company_url}>
          {result.company}
        </Link>

        <JobTitle>
          {result.title}
        </JobTitle>

        <Link href={result.how_to_apply}>
          Apply
        </Link>
      </Job>
    </Card>
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
