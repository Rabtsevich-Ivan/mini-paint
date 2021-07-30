import styled from 'styled-components';

export const Hr = styled.hr`
  margin-top: 2px;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  list-style: none;
  margin: 0;
  padding-top: 2px;
`;

export const NavListItem = styled.li`
  a {
    text-decoration: none;
    display: block;
    padding: 15px 20px;
  }
  a:hover {
    background-color: gray;
    color: #fff;
    cursor: pointer;
  }
  .focused {
    background-color: gray;
    color: #fff;
  }
`;
