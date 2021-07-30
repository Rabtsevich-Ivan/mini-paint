import styled from 'styled-components';
import { Btn } from '../../../../global-styles';

export const ToolSection = styled.div`
  padding-bottom: 1rem;
`;

export const ToolSectionTitle = styled.div`
  padding-bottom: 0.5rem;
`;

export const BtnColor = styled.input`
  border: none;
  width: 100%;
  height: 28px;
  padding: 0;
  cursor: pointer;
`;

export const ToolGrid = styled.div`
  display: grid;
  grid-gap: 2px;
  grid-template-columns: repeat(4, 1fr);
`;

export const ToolBtn = styled.button`
  padding: 0.25rem 0.3rem;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const CanvasSaveBtn = styled.button`
    ${Btn};
    background-color: var(--btn-save);
`;

export const CanvasClearBtn = styled.button`
  ${Btn};
`;
