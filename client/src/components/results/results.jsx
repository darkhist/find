import React from 'react';
import styled from 'styled-components';

import Pie, { VisTitle } from '../vis/pie/pie';
import Map from '../vis/map/map';

export const Subtitle = styled.h3`
  font-size: 1.5em;
  font-weight: 200;
  text-align: center;
  margin: 0;
`;

export const VisResults = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 850px);

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 450px);
  }
`;

export const Vis = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  text-align: center;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const PieChart = styled.div`
  margin: auto;
`;

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

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0em .5em;

  @media screen and (min-width: 768px) {
    padding: 0 2em;
  }
`;

export const Job = styled.li`
  padding: .25em;

  @media screen and (min-width: 768px) {
    padding: .5em;
  }
`;

export const JobTitle = styled.h4`
  font-size: .85em;
  font-weight: 200;
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 1.25em;
  }
`;

export const Link = styled.a`
  color: ${props => props.company ? '#D77A61' : 'black'};
  font-size: ${props => props.company ? '1em' : '.85em'};
  font-weight: ${props => props.company ? 'bold' : '200'};
  text-decoration-line: none;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    font-size: ${props => props.company ? '1.25em' : '1em'};
  }
`;

const Results = ({ jobs, keywords, location }) => {
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
    <VisResults>
      <div className="visualizations">
        <Subtitle> Visualizations </Subtitle>
        <Vis>
          <PieChart>
            <Pie data={keywords} />
          </PieChart>
          <div className="map">
            <VisTitle> Map </VisTitle>
            <Map location={location} />
          </div>
        </Vis>
      </div>
      <div className="resultList">
        <Subtitle> Results </Subtitle>
        <div className="jobs">
          <List>
            {list}
          </List>
        </div>
      </div>
    </VisResults>
  );
};

export default Results;
