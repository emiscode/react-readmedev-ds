import React from 'react';
import { color } from '../../theme';
import styled, { css } from 'styled-components';

export interface RdButtonProps {
  text?: string;
  onClick?: () => void;
  btnType?: 'primary' | 'secondary';
}

const StyledButton = styled.button<RdButtonProps>`
  cursor: pointer;
  font-size: 20px;
  padding: 16px 32px;
  font-family: monospace;
  border: 3px solid ${color.purple[500]};

  color: ${(props: RdButtonProps) =>
    props.btnType === 'primary' ? color.white : color.purple[500]};

  background: ${(props: RdButtonProps) =>
    props.btnType === 'primary' ? color.purple[500] : color.white};

  ${(props: RdButtonProps) =>
    props.btnType === 'primary'
      ? css`
          &:hover {
            background: ${color.purple[300]};
            border: 3px solid ${color.purple[300]};
          }
        `
      : css`
          &:hover {
            color: ${color.purple[300]};
            background: ${color.white};
            border: 3px solid ${color.purple[300]};
          }
        `};
`;

export const RdButton = ({
  text,
  onClick,
  btnType = 'primary',
}: RdButtonProps) => {
  return (
    <StyledButton onClick={onClick} btnType={btnType}>
      {text}
    </StyledButton>
  );
};
