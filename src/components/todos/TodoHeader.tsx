import React from 'react';
import styled from 'styled-components';
import { Filter, CreateButton, TodoTypes } from 'components';

interface TodoHeaderProps {
  status: string;
  todoItems: TodoTypes[];
  handleVisibleForm: () => void;
}

const TodoHeader: React.FC<TodoHeaderProps> = ({ status, todoItems, handleVisibleForm }) => {
  return (
    <Wrapper>
      <Left>
        <Title color={titleColor(status)}>{status}</Title>
        <Count>{todoItems.length}</Count>
      </Left>
      <Right>
        <CreateButton handleVisibleForm={handleVisibleForm} />
        <Filter />
      </Right>
    </Wrapper>
  );
};

const titleColor = (status: string): string => {
  if (status === '할 일') return `rgba(255, 0, 26, 0.2)`;
  else if (status === '진행 중') return `rgba(233, 168, 0, 0.2)`;
  else return `rgba(0, 135, 107, 0.2)`;
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${({ theme }) => theme.size.mobile} {
    flex-direction: column;
    align-items: stretch;
  }
  padding: 0 4px 16px;
  box-shadow: rgb(55 53 47 / 16%) 0px 0.4px 0px;
`;

const Left = styled.div`
  display: flex;
  gap: 0 4px;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.size.desktop} {
    gap: 0 4px;
  }

  @media ${({ theme }) => theme.size.mobile} {
    justify-content: space-between;
    margin-top: 8px;
  }
`;

const Title = styled.h2`
  flex: 1;
  color: ${({ theme }) => theme.color.BLACK};
  padding: 6px;
  border-radius: 4px;
  background-color: ${(props) => props.color};
`;

const Count = styled.h2`
  color: ${({ theme }) => theme.color.GRAY};
  margin-left: 8px;

  @media ${({ theme }) => theme.size.mobile} {
    flex-direction: column;
    display: none;
  }
`;

export default TodoHeader;
