import styled from 'styled-components';

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: var(--btn);
  bottom: 0;
  outline: 0;
  border: 0;
  width: 100%;
  border-radius: 0;
  text-decoration: none;
  padding: 10px 0.5rem;
  border-radius: 2px;
  transition: all 0.2s ease-out;
  &:hover {
    background: var(--btn__hover);
  }

  ${(props: any) => {
    if (props.btnType === 'formBtn') {
      return `background-color: #493;
        color: #fff;
        padding: 0.7rem;
        margin-top: 1.5rem;
        font-size: 16px;
        &:hover {
          background-color: var(--btn-submit__hover);
        }`;
    } else if (props.btnType === 'canvasSave') {
        return `
        background-color: var(--btn-save);
        &:hover {
          background: var(--btn-save__hover);
        }
        `
    }
  }}
`;
