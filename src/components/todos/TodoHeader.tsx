import CreateButton from 'components/common/CreateButton';
import Filter from 'components/common/Filter';
import React from 'react';
import styled from 'styled-components';

interface TodoHeaderProps {
  status: string;
}

const TodoHeader: React.FC<TodoHeaderProps> = ({ status }) => {
  return (
    <Wrapper>
      <Title>{status}</Title>
      <CreateButton status={status} />
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
