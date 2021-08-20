import styled from 'styled-components';
import { css } from 'styled-components';

//Forms Same styles
export const BasicMainForm = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const BasicFormWrapper = css`
  min-width: 400px;
  padding: 2rem;
  border: 1px solid rgb(204, 198, 198);
  border-radius: 5px;
  line-height: 1.8;
  font-size: 1.1rem;
`;

export const FormTitle = styled.h1`
  text-align: center;
`;

export const FormGroup = styled.div`
  margin-bottom: 10px;
`;
export const FormGroupLabel = styled.label`
  font-size: 20px;
`;
export const FormControl = styled.input`
  display: block;
  width: 100%;
  padding: 0.7rem 0.9rem;
  outline: none;
  border: 1px solid rgb(204, 198, 198);
  &:focus {
    border: 1px solid rgb(65, 173, 44);
  }
`;

export const FormError = styled.p`
  color: #bf1650;
  margin-top: 5px;
  margin-bottom: 5px;
  &::before {
    display: inline;
    content: '⚠ ';
  }
`;
