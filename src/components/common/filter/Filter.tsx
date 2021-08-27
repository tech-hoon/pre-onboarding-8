import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { MdFilterList } from 'react-icons/md';
import { FilterDropDown } from 'components';
import { TodoTypes } from 'components/todos/TodoTypes';

interface DropDownProps {
  status: string;
  todoItems: TodoTypes[];
  dropOpen: boolean;
  selectCreator: string[];
  filterOpen: () => void;
  creatorChecked: (checked: boolean, value: string) => void;
  handleTodoSort: (status: string) => void;
  handleTodoCreator: (creators: string[], status: string) => void;
  handleFilterd: (creators: string[]) => void;
  selectFilter: { date: boolean; creator: boolean };
  setSelectFilter: Dispatch<SetStateAction<{ date: boolean; creator: boolean }>>;
}

const Filter: React.FC<DropDownProps> = ({
  status,
  dropOpen,
  filterOpen,
  creatorChecked,
  selectCreator,
  handleTodoSort,
  handleTodoCreator,
  handleFilterd,
  selectFilter,
  setSelectFilter,
}) => {
  const handleSelectColor = () => {
    if (selectFilter.date || selectFilter.creator) {
      return 'red';
    } else {
      return 'black';
    }
  };

  return (
    <Wrapper>
      <Button onClick={filterOpen}>
        <MdFilterList size={24} color={handleSelectColor()} />
      </Button>
      {dropOpen && (
        <FilterDropDown
          status={status}
          creatorChecked={creatorChecked}
          selectCreator={selectCreator}
          handleTodoSort={handleTodoSort}
          filterClose={filterOpen}
          handleTodoCreator={handleTodoCreator}
          handleFilterd={handleFilterd}
          setSelectFilter={setSelectFilter}
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

const Button = styled.button`
  &:hover {
    transform: scale(1.2);
  }
`;
