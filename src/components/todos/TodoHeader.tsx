import React from 'react';
import styled from 'styled-components';
import { Filter, CreateButton } from 'components';

interface TodoHeaderProps {
  status: string;
  handleVisibleForm: () => void;
}

const TodoHeader: React.FC<TodoHeaderProps> = ({ status, handleVisibleForm }) => {
  return (
    <Wrapper>
      <Title>{status}</Title>
      <CreateButton handleVisibleForm={handleVisibleForm} />
      <Filter />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  flex: 1;
`;

export default TodoHeader;
