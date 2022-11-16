import React from 'react';
import { color } from '../../theme';
import styled from 'styled-components';

const StyledInput = styled.div`
  label {
    display: flex;
    font-size: 1.5rem;
    flex-direction: column;
    font-family: monospace;
    color: ${color.gray[700]};
  }

  span {
    margin: 10px;
  }

  input {
    width: 32rem;
    padding: 10px;
    font-size: 1.3rem;
    font-family: serif;
    background: ${color.white};
    color: ${color.yellow[900]};
    border: 1px solid ${color.purple[500]};

    ::placeholder {
      color: ${color.gray[300]};
    }
  }
`;

export interface RdInputProps {
  label?: string;
  value: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'date';
  onChange: (value: string) => void;
}

export const RdInput = ({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
}: RdInputProps) => {
  return (
    <StyledInput>
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
