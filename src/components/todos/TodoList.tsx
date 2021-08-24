import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import todoItems from 'utils/data.json';
import { TodoTypes } from './TodoTypes';

interface TodoListProps {
  todoItems: TodoTypes[];
}

const TodoList: React.FC<TodoListProps> = () => {
  return (
    <Wrapper>
      {todoItems.map((todoItem, i) => (
        <TodoItem key={i} todoItem={todoItem} />
      ))}
    </Wrapper>
  );
};

export default TodoList;

const Wrapper = styled.ul``;
