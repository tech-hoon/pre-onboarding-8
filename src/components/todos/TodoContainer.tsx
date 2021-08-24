import React from 'react';
import styled from 'styled-components';
import TodoList from './TodoList';
import TodoHeader from './TodoHeader';

const TodoContainer = () => {
  return (
    <Wrapper>
      <TodoHeader />
      <TodoList />
    </Wrapper>
  );
};

export default TodoContainer;

const Wrapper = styled.div`
  width: 100%;
`;
