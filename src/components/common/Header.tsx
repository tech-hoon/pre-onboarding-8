import React from 'react';
import styled from 'styled-components';

const Header: React.FC = (): JSX.Element => {
  return (
    <>
      <HeaderWrapper>Todo List</HeaderWrapper>
    </>
  );
};

const HeaderWrapper = styled.h1`
  padding: 12px;
  font-size: 24px;
  font-weight: 600;
  border-bottom: 1px solid black;
`;

export default Header;
