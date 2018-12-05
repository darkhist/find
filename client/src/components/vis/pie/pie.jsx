import React from 'react';
import { RadialChart } from 'react-vis';

const Pie = ({ data }) => (
  <RadialChart
    data={data}
    width={325}
    height={325}
    showLabels
  />
);

export default Pie;
