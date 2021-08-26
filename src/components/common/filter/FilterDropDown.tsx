import { TodoTypes } from 'components/todos/TodoTypes';
import React, { useState } from 'react';
import styled from 'styled-components';
import CreatorModal from './FilterModal';

interface DropDownProps {
  creatorChecked: (checked: boolean, value: string) => void;
  selectCreator: (string | number)[];
  todoItems: TodoTypes[];
  val: (value: any) => void;
  sortTodo: (
    a: { createdAt: string | number | Date },
    b: { createdAt: string | number | Date },
  ) => number;
}

const DropDown: React.FC<DropDownProps> = ({
  creatorChecked,
  selectCreator,
  todoItems,
  val,
  sortTodo,
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleModalClick = () => setModalOpen(!modalOpen);

  const handleSortClick = () => {
    todoItems.sort(sortTodo);
  };

  return (
    <FilterOptions>
      <Value onClick={handleSortClick}>생성일</Value>
      <Value onClick={handleModalClick}>생성자</Value>
      {modalOpen && (
        <CreatorModal
          creatorChecked={creatorChecked}
          selectCreator={selectCreator}
          close={handleModalClick}
          val={val}
        />
      )}
    </FilterOptions>
  );
};

export default DropDown;

const FilterOptions = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  border: 1px solid #333;
  margin-top: 12px;
  width: 100px;
  right: 0;
  gap: 10px 0;
  background-color: #fff;
  text-align: center;
`;

const Value = styled.span`
  padding: 5px 0;

  :hover {
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
  }
`;
