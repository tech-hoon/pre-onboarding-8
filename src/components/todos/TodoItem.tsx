import React from 'react';
import styled from 'styled-components';

interface TodoProps {
  id: number;
  taskName: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

interface Item {
  item: TodoProps;
}

const TodoItem: React.FC<Item> = ({ item }) => {
  return (
    <Wrapper>
      <p>{item.taskName}</p>
    </Wrapper>
  );
};

export default TodoItem;

const Wrapper = styled.li`
  border: 1px solid blue;
`;
