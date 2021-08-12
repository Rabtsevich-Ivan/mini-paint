import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: absolute;
  z-index: 800;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  background: #fff;
  border: 1px solid #bebebe;
  border-radius: 2px;
  padding: 12px 16px;
  position: relative;
  height: 220px;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ModalClose = styled.span`
  position: absolute;
  right 8px;
  top: 4px;
  font-size: 24px;
  cursor: pointer;
`;

export const ModalField = styled.input`
  padding: 10px 15px;

  outline: none;
  border: 1px solid rgb(204, 198, 198);
  &:focus {
    border: 1px solid ${(props) => props.theme.colors['btn-save']};
  }
`;

export const ModalSubmit = styled.button`
  margin-top: 18px;
  padding: 10px 40px;
  outline: none;
  border: 0;
  border-radius: 3px;
  background: ${(props) => props.theme.colors['btn-save']};
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.colors['btn-save__hover']};
  }
`;

export const ModalSuccessMessage = styled.p`
  color: green;
`;
