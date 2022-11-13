import React from 'react';
import { color } from '../../theme';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: white;
  cursor: pointer;
  font-size: 20px;
  padding: 16px 32px;
  background: ${color.purple[500]};
  border: 2px solid ${color.purple[500]};

  &:hover {
    background: ${color.purple[300]};
    border: 2px solid ${color.purple[300]};
  }
`;

export const RdButton = () => {
  return <StyledButton>Click me!</StyledButton>;
};
