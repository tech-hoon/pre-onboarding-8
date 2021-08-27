import { TodoTypes } from 'components/todos/TodoTypes';
import React, { useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import CreatorModal from './FilterModal';
import { sortTodoHandle } from 'utils/sorting';
interface DropDownProps {
  status: string;
  creatorChecked: (checked: boolean, value: string) => void;
  selectCreator: TodoTypes[];
  handleTodoSort: (status: string) => void;
  handleTodoCreator: (creators: TodoTypes[], status: string) => void;
  filterClose: () => void;
}

const DropDown: React.FC<DropDownProps> = ({
  creatorChecked,
  selectCreator,

  handleTodoSort,
  handleTodoCreator,
  filterClose,
  status,
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleModalClick = () => {
    setModalOpen(!modalOpen);
  };

  const sortEvent = () => {
    handleTodoSort(status);
    filterClose();
  };

  return (
    <FilterOptions>
      <Value onClick={sortEvent}>생성일</Value>
      <Value onClick={handleModalClick}>생성자</Value>
      {modalOpen && (
        <CreatorModal
          creatorChecked={creatorChecked}
          selectCreator={selectCreator}
          closeModal={handleModalClick}
          handleTodoCreator={handleTodoCreator}
          filterClose={filterClose}
          status={status}
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
  box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 2px 4px;
  border-radius: 5px;
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
