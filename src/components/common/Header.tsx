import React from 'react';
import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <>
      <HeaderWrapper>Todo List</HeaderWrapper>
    </>
  );
};

const HeaderWrapper = styled.h1`
  padding: 16px;
  font-size: 20px;
  font-weight: 500;
  box-shadow: rgb(55 53 47 / 16%) 0px 1px 0px;
`;

export default Header;
