import React from 'react';
import styled from 'styled-components';
import { MdFilterList } from 'react-icons/md';
import { FilterDropDown } from 'components';
import { TodoTypes } from 'components/todos/TodoTypes';

interface DropDownProps {
  status: string;
  todoItems: TodoTypes[];
  dropOpen: boolean;
  selectCreator: TodoTypes[];
  filterOpen: () => void;
  creatorChecked: (checked: boolean, value: string) => void;
  handleTodoSort: (status: string) => void;
  handleTodoCreator: (creators: TodoTypes[], status: string) => void;
}

const Filter: React.FC<DropDownProps> = ({
  status,
  dropOpen,
  filterOpen,
  creatorChecked,
  selectCreator,
  handleTodoSort,
  handleTodoCreator,
}) => {
  return (
    <Wrapper>
      <MdFilterList size={24} onClick={filterOpen} />
      {dropOpen && (
        <FilterDropDown
          status={status}
          creatorChecked={creatorChecked}
          selectCreator={selectCreator}
          handleTodoSort={handleTodoSort}
          filterClose={filterOpen}
          handleTodoCreator={handleTodoCreator}
        />
      )}
    </Wrapper>
  );
};

export default Filter;

const Wrapper = styled.div`
  text-align: right;
  cursor: pointer;
  position: relative;
`;
