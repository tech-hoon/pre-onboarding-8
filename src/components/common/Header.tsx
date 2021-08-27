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
  color: ${({ theme }) => theme.BLACK};

  padding: 16px;
  font-size: 1.8em;
  font-weight: 400;
  box-shadow: rgb(55 53 47 / 16%) 0px 1px 0px;

  @media ${({ theme }) => theme.tablet} {
    font-size: 2em;
  }

  @media ${({ theme }) => theme.mobile} {
    font-size: 2em;
  }
`;

export default Header;
