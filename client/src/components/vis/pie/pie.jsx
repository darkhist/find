import React from 'react';
import { RadialChart } from 'react-vis';

import '../../../../node_modules/react-vis/dist/style.css';

const myData = [{ angle: 1 }, { angle: 5 }, { angle: 2 }];

const Pie = () => (
  <RadialChart
    data={myData}
    width={300}
    height={300}
  />
);

export default Pie;
