import CreateButton from 'components/common/CreateButton';
import Filter from 'components/common/Filter';
import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface TodoHeaderProps {
  status: string;
  setIsVisibleForm: Dispatch<SetStateAction<boolean>>;
}

const TodoHeader: React.FC<TodoHeaderProps> = ({ status, setIsVisibleForm }) => {
  return (
    <Wrapper>
      <Title>{status}</Title>
      <CreateButton status={status} setIsVisibleForm={setIsVisibleForm} />
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
