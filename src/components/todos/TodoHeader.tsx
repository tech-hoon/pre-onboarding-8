import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Filter, CreateButton, TodoTypes } from 'components';

interface TodoHeaderProps {
  status: string;
  todoItems: TodoTypes[];
  setIsVisibleForm: Dispatch<SetStateAction<boolean>>;
}

const TodoHeader: React.FC<TodoHeaderProps> = ({ status, todoItems, setIsVisibleForm }) => {
  return (
    <Wrapper>
      <Left>
        <Title color={titleColor(status)}>{status}</Title>
        <Count>{todoItems.length}</Count>
      </Left>
      <Right>
        <CreateButton setIsVisibleForm={setIsVisibleForm} />
        <Filter />
      </Right>
    </Wrapper>
  );
};

function titleColor(status: string): string {
  if (status === '할 일') return `rgba(255, 0, 26, 0.2)`;
  else if (status === '진행 중') return `rgba(233, 168, 0, 0.2)`;
  else return `rgba(0, 135, 107, 0.2)`;
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${({ theme }) => theme.mobile} {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Left = styled.div`
  display: flex;
  gap: 0 4px;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.desktop} {
    gap: 0 4px;
  }

  @media ${({ theme }) => theme.mobile} {
    justify-content: space-between;
    margin-top: 8px;
  }
`;

const Title = styled.h2`
  flex: 1;
  color: ${({ theme }) => theme.BLACK};
  padding: 6px;
  border-radius: 4px;
  background-color: ${(props) => props.color};
`;

const Count = styled.h2`
  color: ${({ theme }) => theme.GRAY};
  margin-left: 8px;

  @media ${({ theme }) => theme.mobile} {
    flex-direction: column;
    display: none;
  }
`;

export default TodoHeader;
