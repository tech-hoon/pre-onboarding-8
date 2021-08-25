import React from 'react';
import styled from 'styled-components';
import useTodo from 'hooks/useTodo';
import { STATUS } from './utils/config';
import { Header, TodoContainer, TodoTypes } from 'components';

const App: React.FC = () => {
  const { items, handleTodoCreate, handleTodoDelete, handleTodoUpdate } = useTodo();

  return (
    <Wrapper>
      <Header />
      <ContainerWrapper>
        {Object.values(STATUS).map((status: string, index: number) => (
          <TodoContainer
            key={index}
            status={status}
            todoItems={currentTodos(status, items)}
            handleTodoCreate={handleTodoCreate}
            handleTodoDelete={handleTodoDelete}
            handleTodoUpdate={handleTodoUpdate}
          />
        ))}
      </ContainerWrapper>
    </Wrapper>
  );
};

const currentTodos = (status: string, items: TodoTypes[]) =>
  items.filter((item) => item.status === status);

const Wrapper = styled.div`
  width: 100%;
`;

const ContainerWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  gap: 4px 30px;
  margin: 50px auto;
`;

export default App;
