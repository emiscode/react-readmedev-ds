import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface RdModalProps {
  children: ReactNode;
  title: string;
  open: boolean;
  onClose: () => void;
}

const StyledModal = styled.div`
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  background: rgba(10, 25, 47, 0.85);
`;

const Modal = styled.div`
  position: fixed;
  padding: 64px;
  background: #8892b0;
  box-shadow: 4px 4px 24px -4px rgba(0, 0, 0, 0.85);
  border-radius: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TitleModalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: sans-serif;
  align-items: center;
`;

const TitleModal = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  color: #112240;
  margin: 0;
`;

const BtnCloseModal = styled.button`
  background: #112240;
  border-radius: 0.3rem;
  border: none;
  cursor: pointer;
  color: #64ffda;
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.2rem 0.5rem;
`;

export const RdModal = ({ children, open, onClose, title }: RdModalProps) => {
  if (!open) {
    return <></>;
  }
  return (
    <>
      <StyledModal onClick={onClose} />
      <Modal>
        <TitleModalWrapper>
          <TitleModal>{title}</TitleModal>
          <BtnCloseModal onClick={onClose}>X</BtnCloseModal>
        </TitleModalWrapper>
        {children}
      </Modal>
    </>
  );
};
