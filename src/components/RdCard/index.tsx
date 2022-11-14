import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { color } from '../../theme';

export interface RdCardProps {
  children: ReactNode;
}

const StyledCard = styled.div`
  padding: 48px;
  font-family: serif;
  background: ${color.white};
  border: 1px solid ${color.gray[700]};
  box-shadow: -10px 10px ${color.gray[700]};
`;

export const RdCard = ({ children }: RdCardProps) => {
  return <StyledCard>{children}</StyledCard>;
};
