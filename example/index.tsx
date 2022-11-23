import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  RdBookFormatGroup,
  RdButton,
  RdCard,
  RdInput,
  RdInputQty,
  RdTag,
} from '../src/';

import './index.css';

const App = () => {
  return (
    <div className="main-container">
      <div className="container">
        <h1>
          <span className="title">Readme</span>
          <span className="sub-title">Dev</span>
        </h1>
        <h2>Programming Books, Articles and Tutorials.</h2>
        <h3>
          This project was created to study how to build and publish React UI
          Components Library with Storybook.
        </h3>
      </div>

      <div className="container">
        <RdButton text="Button" />
      </div>

      <div className="container" style={{ width: '30%' }}>
        <RdCard>
          <h1 style={{ color: '#ccd6f6' }}>Hey, this is a card!</h1>
        </RdCard>
      </div>

      <div className="container">
        <RdTag text="Tag" />
      </div>

      <div className="container">
        <RdBookFormatGroup
          items={[
            {
              id: 1,
              title: 'E-book',
              body: '$ 9.99',
              footer: '.pdf, .epub, .mob',
            },
            {
              id: 2,
              title: 'Paperback',
              body: '$ 18.99',
              footer: '.pdf, .epub, .mob',
            },
          ]}
        />
      </div>

      <div className="container">
        <RdInput
          type="email"
          label="E-mail"
          value={''}
          onChange={(value: string): void => {
            console.log('RdInput');
          }}
          shadowEffect={false}
        />
      </div>

      <div className="container">
        <RdInputQty label={'Quantity'} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
