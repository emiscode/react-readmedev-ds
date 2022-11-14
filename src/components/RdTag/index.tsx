import React from 'react';
import { color } from '../../theme';
import styled from 'styled-components';

export interface RdTagProps {
  text?: string;
}

const StyledTag = styled.span`
  padding: 32px;
  font-size: 1.5rem;
  font-weight: 700;
  display: inline-block;
  font-family: monospace;
  text-transform: uppercase;
  color: ${color.gray[700]};
  background: ${color.yellow[500]};
`;

export const RdTag = ({ text }: RdTagProps) => {
  return <StyledTag>{text}</StyledTag>;
};
