import React from 'react';
import styled from 'styled-components';

import Pie from '../../vis/pie/pie';
import Map from '../../vis/map/map';

import './results.scss';

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

const Results = ({ jobs, keywords }) => {
  if (jobs === undefined) {
    return (
      <div />
    );
  }

  if (jobs.length === 0) {
    return (
      <div>
        <Subtitle>
          No Results
          <span role="img" aria-label="sadface"> 😢 </span>
        </Subtitle>
      </div>
    );
  }

  const list = jobs.map(job => (
    <Card key={job.id}>
      <Job>
        <Link company href={job.company_url}>
          {job.company}
        </Link>

        <JobTitle>
          {job.title}
        </JobTitle>

        <Link href={job.how_to_apply}>
          Apply
        </Link>
      </Job>
    </Card>
  ));

  return (
    <div className="vis-results">

      <div className="visualizations">
        <Subtitle> Visualizations </Subtitle>
        <div className="pie-map">
          <div className="pie">
            <Pie data={keywords} />
          </div>
          <div className="map">
            <Map />
          </div>
        </div>
      </div>

      <div className="results">
        <Subtitle> Results </Subtitle>
        <div className="jobs">
          <ul>
            {list}
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Results;
