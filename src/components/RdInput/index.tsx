import React from 'react';
import { color, font } from '../../theme';
import styled from 'styled-components';

const StyledInput = styled.div<{ shadowEffect: boolean }>`
  * {
    font-family: ${font.default};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  label {
    display: flex;
    font-size: 1.5rem;
    flex-direction: column;
    color: ${color.gray[900]};
  }

  span {
    margin: 10px;
  }

  input {
    width: 32rem;
    padding: 10px;
    font-size: 1.3rem;
    border-radius: 1rem;
    background: ${color.white};
    color: ${color.gray[700]};
    border: 1px solid ${color.purple[500]};

    box-shadow: ${props =>
      props.shadowEffect
        ? `0 5px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 16%)`
        : `none`};

    ::placeholder {
      color: ${color.gray[300]};
    }
  }
`;

export interface RdInputProps {
  label?: string;
  value: string;
  placeholder?: string;
  shadowEffect: boolean;
  type?: 'text' | 'email' | 'password' | 'date';
  onChange: (value: string) => void;
}

export const RdInput = ({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  shadowEffect = false,
}: RdInputProps) => {
  return (
    <StyledInput shadowEffect={shadowEffect}>
      <label>
        <span>{label}</span>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={event => onChange(event.target.value)}
        />
      </label>
    </StyledInput>
  );
};
