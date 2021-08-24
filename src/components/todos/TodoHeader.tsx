import Button from 'components/common/CreateButton';
import Filter from 'components/common/Filter';
import React from 'react';
import styled from 'styled-components';

interface TodoHeaderProps {
  title: string;
}

const TodoHeader: React.FC<TodoHeaderProps> = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Button />
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
