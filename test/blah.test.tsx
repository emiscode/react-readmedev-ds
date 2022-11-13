import React from 'react';
import * as ReactDOM from 'react-dom';
import { Primary as RdButton } from '../stories/RdButton.stories';

describe('RdButton', () => {
  it('renders RdButton without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RdButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
