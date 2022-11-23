import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { color, font } from '../../theme';

export interface RdCardProps {
  children: ReactNode;
}

const StyledCard = styled.div`
  font-family: ${font.default};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  padding: 48px;
  background: ${color.blue[700]};
  box-shadow: 8px 8px ${color.green[100]};
`;

export const RdCard = ({ children }: RdCardProps) => {
  return <StyledCard>{children}</StyledCard>;
};
