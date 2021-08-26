import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { TodoItem, TodoTypes } from 'components';

interface TodoListProps {
  status: string;
  todoItems: TodoTypes[];
  handleTodoUpdate: (text: string, id: number) => void;
  handleTodoDelete: (taskID: number) => void;
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
