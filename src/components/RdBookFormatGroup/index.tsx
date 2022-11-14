import React from 'react';
import { color } from '../../theme';
import styled from 'styled-components';

const StyledSection = styled.section<{ selected: boolean }>`
  width: 195px;
  height: 90px;
  margin: 10px;
  display: flex;
  padding: 4px;
  cursor: pointer;
  border: 2px solid;
  text-align: center;
  font-family: serif;
  flex-direction: column;
  justify-content: space-around;
  border-color: ${color.yellow[900]};

  background: ${props =>
    props.selected
      ? `linear-gradient(98deg, ${color.yellow[900]} 35%, ${color.yellow[300]})`
      : color.white};

  header {
    font-size: 1.1rem;
    font-weight: 400;
    color: ${props => (props.selected ? color.white : color.yellow[900])};
  }

  strong {
    font-size: 1.4rem;
    font-weight: 700;
    color: ${props => (props.selected ? color.white : color.yellow[900])};
  }

  footer {
    font-size: 1rem;
    font-weight: 400;
    color: ${props => (props.selected ? color.white : color.gray[300])};
  }
`;

export interface IRdBookFormatGroup {
  id: number;
  title: string;
  body: string;
  footer: string;
}

export interface RdBookFormatGroupProps {
  items: IRdBookFormatGroup[];
}

export const RdBookFormatGroup = ({ items }: RdBookFormatGroupProps) => {
  return (
    <>
      {items.map(item => (
        <StyledSection key={item.id} selected={false}>
          <header>{item.title}</header>
          <div>
            <strong>{item.body}</strong>
          </div>
          <footer>{item.footer}</footer>
        </StyledSection>
      ))}
    </>
  );
};
