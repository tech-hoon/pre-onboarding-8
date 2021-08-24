import React from 'react';
import styled from 'styled-components';
import TodoContainer from 'components/todos/TodoContainer';

const App: React.FC = () => {
  return (
    <Wrapper>
      <TodoContainer />
      <TodoContainer />
      <TodoContainer />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 30px;
  width: 1280px;
  margin: 50px auto;
  border: 1px solid #333;
`;
