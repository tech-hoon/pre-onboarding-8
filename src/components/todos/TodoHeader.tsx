import React, { useState } from 'react';
import CreateButton from 'components/common/CreateButton';
import Filter from 'components/common/filter/Filter';
import styled from 'styled-components';

const dummyData = ['남주', '택훈', '진수', '삭'];
interface TodoHeaderProps {
  status: string;
}

const TodoHeader: React.FC<TodoHeaderProps> = ({ status }) => {
  const [dropOpen, setDropOpen] = useState<boolean>(false);
  const [selectCreator, setSelectCreator] = useState<any[]>([]);

  const handleOpenClick = () => setDropOpen(!dropOpen);

  const onCheckedHandler = (checked: boolean, id: number) => {
    if (checked) {
      setSelectCreator([...selectCreator, id]);
      console.log('add', selectCreator);
    } else {
      setSelectCreator(selectCreator.filter((check) => check !== id));
      console.log('remove', selectCreator);
    }
  };

  return (
    <Wrapper>
      <Title>{status}</Title>
      <CreateButton status={status} />
      <Filter
        dropOpen={dropOpen}
        handleOpenClick={handleOpenClick}
        onCheckedHandler={onCheckedHandler}
        selectCreator={selectCreator}
      />
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
