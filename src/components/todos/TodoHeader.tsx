import CreateButton from 'components/common/CreateButton';
import Filter from 'components/common/filter/Filter';
import React, { useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { TodoTypes } from './TodoTypes';

interface TodoHeaderProps {
  status: string;
  setIsVisibleForm: Dispatch<SetStateAction<boolean>>;
  todoItems: TodoTypes[];
  val: (value: any) => void;
  sortTodo: (
    a: { createdAt: string | number | Date },
    b: { createdAt: string | number | Date },
  ) => number;
}

const TodoHeader: React.FC<TodoHeaderProps> = ({
  status,
  setIsVisibleForm,
  todoItems,
  val,
  sortTodo,
}) => {
  const [dropOpen, setDropOpen] = useState<boolean>(false);
  const [selectCreator, setSelectCreator] = useState<(string | number)[]>([]);

  const onFilterOpenHandler = () => setDropOpen(!dropOpen);

  const onCreatorNameCheckedHandler = (checked: boolean, value: string) => {
    if (checked) {
      setSelectCreator([...selectCreator, value]);
    } else {
      setSelectCreator(selectCreator.filter((check) => check !== value));
    }
  };

  return (
    <Wrapper>
      <Title>{status}</Title>
      <CreateButton status={status} setIsVisibleForm={setIsVisibleForm} />
      <Filter
        dropOpen={dropOpen}
        filterOpen={onFilterOpenHandler}
        creatorChecked={onCreatorNameCheckedHandler}
        selectCreator={selectCreator}
        todoItems={todoItems}
        val={val}
        sortTodo={sortTodo}
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
