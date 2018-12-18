import React from 'react';
import { RadialChart } from 'react-vis';
import styled from 'styled-components';

export const ChartTitle = styled.h4`
  font-size: 1.15em;
  font-weight: 200;
  text-align: center;
`;

const Pie = ({ data }) => (
  <div className="pie-container">
    <ChartTitle>
      Keyword Relevance
    </ChartTitle>

    <RadialChart
      data={data}
      width={325}
      height={325}
      showLabels
    />
  </div>
);

export default Pie;
