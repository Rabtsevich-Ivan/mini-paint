import styled from 'styled-components';

export const GridWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 5px;
  justify-items: center;
`;

export const ImageWrap = styled.div`
  height: 300px;
  width: 300px;
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Loader = styled.img`
  display: block;
  max-width: 600px;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
`;
