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

export const RdBookFormatGroup = () => {
  return (
    <>
      <StyledSection selected={false}>
        <header>Book</header>
        <div>
          <strong>$ 9.99</strong>
        </div>
        <footer>.pdf, .epub, .mob</footer>
      </StyledSection>
      <StyledSection selected={true}>
        <header>Book</header>
        <div>
          <strong>$ 9.99</strong>
        </div>
        <footer>.pdf, .epub, .mob</footer>
      </StyledSection>
      <StyledSection selected={false}>
        <header>Book</header>
        <div>
          <strong>$ 9.99</strong>
        </div>
        <footer>.pdf, .epub, .mob</footer>
      </StyledSection>
    </>
  );
};
