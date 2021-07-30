import styled from 'styled-components';

export const PaintWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PaintControl = styled.div`
  padding: 10px;
  border: 1px solid black;
  width: 150px;
  height: 504px;
`;

export const PaintArea = styled.div`
  width: calc(100% - 160px);
  height: 502px;

  #canvas {
    border: 1px solid black;
  }
`;
