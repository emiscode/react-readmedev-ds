import React from 'react';
import { color, font } from '../../theme';
import styled, { css } from 'styled-components';

export interface RdButtonProps {
  text?: string;
  onClick?: () => void;
  btnType?: 'primary' | 'secondary';
}

const StyledButton = styled.button<RdButtonProps>`
  font-family: ${font.default};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  cursor: pointer;
  font-size: 20px;
  padding: 16px 32px;
  border: 3px solid ${color.green[100]};

  color: ${(props: RdButtonProps) =>
    props.btnType === 'primary' ? color.green[100] : color.gray[100]};

  background: ${(props: RdButtonProps) =>
    props.btnType === 'primary' ? color.green[700] : color.blue[900]};

  ${(props: RdButtonProps) =>
    props.btnType === 'primary'
      ? css`
          &:hover {
            color: ${color.blue[900]};
            background: ${color.green[100]};
            border: 3px solid ${color.green[100]};
          }
        `
      : css`
          &:hover {
            color: ${color.green[100]};
            background: ${color.green[700]};
            border: 3px solid ${color.green[100]};
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
