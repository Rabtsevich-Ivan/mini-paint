import styled from 'styled-components';

export const PaintWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PaintControl = styled.div`
  padding: 10px;
  border-right: 1px solid black;
  width: 200px;
  height: 100vh;
  top: 0;
  left: 0;
`;

export const PaintArea = styled.div`
  width: calc(100% - 160px);
  height: 502px;
`;
