import React from 'react';
import { RadialChart } from 'react-vis';

const myData = [{ angle: 1 }, { angle: 5 }, { angle: 2 }];

const Pie = () => (
  <RadialChart
    data={myData}
    width={325}
    height={325}
  />
);

export default Pie;
