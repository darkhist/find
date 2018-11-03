import React from 'react';
import ReactDOM from 'react-dom';

import Sample from './sample/sample';

const App = () => (
  <div>
    <Sample />
  </div>
);

ReactDOM.render(<App />, document.querySelector('.container'));
