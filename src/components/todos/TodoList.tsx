import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { TodoTypes } from './TodoTypes';

interface TodoListProps {
  status: string;
  todoItems: TodoTypes[];
  handleTodoUpdate: () => void;
  handleTodoDelete: () => void;
}

const TodoList: React.FC<TodoListProps> = ({
  status,
  todoItems,
  handleTodoDelete,
  handleTodoUpdate,
}) => {
  return (
    <Wrapper>
      {todoItems.map((todoItem, i) => (
        <TodoItem
          key={i}
          status={status}
          todoItem={todoItem}
          handleTodoUpdate={handleTodoUpdate}
          handleTodoDelete={handleTodoDelete}
        />
      ))}
    </Wrapper>
  );
};

export default TodoList;

const Wrapper = styled.ul``;
