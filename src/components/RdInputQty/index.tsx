import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { color } from '../../theme';

const StyledButton = styled.button`
  width: 28px;
  height: 28px;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  color: ${color.white};
  background: ${color.purple[500]};
`;
const StyledSpan = styled.span`
  margin: 0 12px;
  font-size: 18px;
  line-height: 27px;
  display: inline-block;
  color: ${color.yellow[900]};
`;

const StyledFlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledContainer = styled.div`
  width: 100px;
  text-align: center;
  display: inline-block;
`;

const StyledLabel = styled.label`
  display: block;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 8px;
  color: ${color.gray[700]};
`;

export interface RdInputQtyProps {
  label: string;
  onChange?: (value: number) => void;
}

export const RdInputQty = ({ onChange, label = 'Qty' }: RdInputQtyProps) => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    if (onChange) {
      onChange(Number(value));
    }
  }, [value]);

  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledFlexContainer>
        <StyledButton onClick={() => setValue(prev => prev - 1)}>
          -
        </StyledButton>
        <StyledSpan>{value}</StyledSpan>
        <StyledButton onClick={() => setValue(prev => prev + 1)}>
          +
        </StyledButton>
      </StyledFlexContainer>
    </StyledContainer>
  );
};
