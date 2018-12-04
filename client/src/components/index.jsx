import React from 'react';
import ReactDOM from 'react-dom';

import Title from './title/title';
import SearchForm from './form/form';

const App = () => (
  <div>
    <Title />
    <SearchForm />
  </div>
);

ReactDOM.render(<App />, document.querySelector('.root'));
