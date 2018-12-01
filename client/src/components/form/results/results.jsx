import React from 'react';
import styled from 'styled-components';

const Subtitle = styled.h3`
  font-size: 1.5em;
  text-align: center;
`;

const Card = styled.div`
  border: 1px solid black;
  text-align: left;
  margin: 3em 0;
`;

const Job = styled.li`
  font-size: 1em;
  padding: .5em;
`;

const Title = styled.h5`
  font-size: 1em;
  margin: 0;
`;

const Company = styled.h4`
  font-size: 1em;
  margin: 0;
`;

const Apply = styled.h6`
  font-size: 1em;
  margin: 0;
`;

const CompanyURL = styled.a`
  font-weight: bold;
  text-decoration: none;
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
        <Company>
          {result.company}
        </Company>

        <Title>
          {result.title}
        </Title>

        <Apply>
          Apply: &thinsp;
          {result.how_to_apply}
        </Apply>

        <CompanyURL>
          {result.company_url}
        </CompanyURL>
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
