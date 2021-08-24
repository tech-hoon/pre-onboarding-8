import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import todoItems from 'utils/data.json';

interface TodoProps {
  id: number;
  taskName: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

const TodoList: React.FC = () => {
  return (
    <Wrapper>
      {todoItems.map((todo: TodoProps) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </Wrapper>
  );
};

export default TodoList;

const Wrapper = styled.div`
  border: 1px solid red;
`;
