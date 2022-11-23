import React from 'react';
import { color, font } from '../../theme';
import styled from 'styled-components';

export interface RdTagProps {
  text?: string;
}

const StyledTag = styled.span`
  font-family: ${font.default};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  padding: 16px;
  font-size: 1.5rem;
  font-weight: 700;
  display: inline-block;
  text-transform: uppercase;
  color: ${color.gray[100]};
  background: ${color.green[500]};
`;

export const RdTag = ({ text }: RdTagProps) => {
  return <StyledTag>{text}</StyledTag>;
};
