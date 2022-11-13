import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RdButton } from '../.';

const App = () => {
  return (
    <div>
      <RdButton />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
